import React from "react";
interface IAnimation {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D | null;
    canvasWidth: number;
    canvasHeight: number;
    image: HTMLImageElement;
    effect: IEffect;
    draw: () => void;
    update: () => void;
}

interface IPartical {
    x: number;
    y: number;
    originX: number;
    originY: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    animation: IAnimation;
    effect: IEffect;
    draw: () => void;
    update: () => void;
}

interface IEffect {
    width: number;
    height: number;
    gap: number;
    mouse: {
        radius: number;
        x: number | undefined;
        y: number | undefined;
    };
    particles: IPartical[];
    animation: IAnimation;
    init: () => void;
    draw: () => void;
    update: () => void;
}

export default class Animation implements IAnimation {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D | null;
    canvasWidth: number;
    canvasHeight: number;
    image: HTMLImageElement;
    effect: IEffect;

    constructor(canvas: HTMLCanvasElement, image: HTMLImageElement) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
        this.image = image;
        this.effect = new Effect(this, this.canvasWidth, this.canvasHeight);

        // update
        this.update();
    }

    draw() {
        this.effect.draw();
    }

    update() {
        this.ctx?.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.effect.update();

        this.draw();
        requestAnimationFrame(this.update.bind(this));
    }
}

class Partical implements IPartical {
    x: number;
    y: number;
    originX: number;
    originY: number;
    size: number;
    animation: IAnimation;
    effect: IEffect;
    vx: number;
    vy: number;
    dx: number;
    dy: number;
    distance: number;
    force: number;
    angle: number;
    color: string;
    ease: number;
    friction: number;

    constructor(
        animation: IAnimation,
        effect: IEffect,
        x: number,
        y: number,
        color: string
    ) {
        this.animation = animation;
        this.effect = effect;
        this.x = Math.random() * this.effect.width;
        this.y = Math.random() * this.effect.height;
        this.y = 0;
        this.originX = Math.floor(x);
        this.originY = Math.floor(y);
        this.size = this.effect.gap;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
        this.color = color;
        this.ease = 0.1;
        this.dx = 0;
        this.dy = 0;
        this.distance = 0;
        this.force = 0;
        this.angle = 0;
        this.friction = 0.95;
    }

    draw() {
        this.animation.ctx!.fillStyle = this.color;
        this.animation.ctx?.fillRect(this.x, this.y, this.size, this.size);
    }

    update() {
        if (this.effect.mouse.x && this.effect.mouse.y) {
            this.dx = this.effect.mouse.x - this.x;
            this.dy = this.effect.mouse.y - this.y;
            this.distance = this.dx * this.dx + this.dy * this.dy;

            this.force = -this.effect.mouse.radius / this.distance;
            if (this.distance < this.effect.mouse.radius) {
                this.angle = Math.atan2(this.dx, this.dy);
                this.vx += this.force * Math.cos(this.angle);
                this.vy += this.force * Math.sin(this.angle);
            }
        }
        this.x += this.vx * this.friction + (this.originX - this.x) * this.ease;
        this.y += this.vy * this.friction + (this.originY - this.y) * this.ease;
    }
}

class Effect implements IEffect {
    width: number;
    height: number;
    gap: number;
    particles: IPartical[];
    animation: IAnimation;
    image: HTMLImageElement;
    mouse: {
        radius: number;
        x: number | undefined;
        y: number | undefined;
    };
    constructor(animation: IAnimation, width: number, height: number) {
        this.animation = animation;
        this.image = this.animation.image;
        this.width = width;
        this.height = height;
        this.particles = [];
        this.gap = 10;
        this.mouse = {
            radius: 3000,
            x: undefined,
            y: undefined,
        };
        this.mouseEvent();
        this.init();
    }

    mouseEvent() {
        window.addEventListener("mousemove", (e: MouseEvent) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });
    }

    init() {
        this.animation.ctx?.drawImage(
            this.image,
            0,
            0,
            this.animation.canvasWidth,
            this.animation.canvasHeight
        );

        const pixels = this.animation.ctx?.getImageData(
            0,
            0,
            this.width,
            this.height
        ).data;

        if (!pixels) return;
        for (let y = 0; y <= this.height; y += this.gap) {
            for (let x = 0; x <= this.width; x += this.gap) {
                const index = (y * this.width + x) * 4;
                const red = pixels[index];
                const green = pixels[index + 1];
                const blue = pixels[index + 2];
                const alpha = pixels[index + 3];
                if (alpha > 0 && (red !== 0 || green !== 0 || blue !== 0)) {
                    const color = `rgb(${red}, ${green}, ${blue})`;
                    this.particles.push(
                        new Partical(this.animation, this, x, y, color)
                    );
                }
            }
        }
    }
    draw = () => {
        this.particles.forEach((particle: IPartical) => {
            particle.draw();
        });
    };

    update() {
        this.particles.forEach((particle: IPartical) => {
            particle.update();
        });
    }
}
