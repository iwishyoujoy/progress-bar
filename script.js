class ProgressBar {
    constructor(elementId, config = {}) {
        this.element = document.getElementById(elementId);
        this.config = {
            speed: 5,
            primaryColor: "#005dff",
            secondaryColor: "#dfe6f0",
            ...config
        };
        this.startDeg = 0;
        this.animationInterval = null;
        this.init();
    }

    init() {
        this.element.style.background = this.getConicGradient(0);

        this.radiusInput = document.getElementById("input");
        this.hideSwitch = document.getElementById("hide");
        this.animateSwitch = document.getElementById("animate");

        this.radiusInput.addEventListener("input", this.handleInput.bind(this));
        this.hideSwitch.addEventListener("click", this.handleHideSwitch.bind(this));
        this.animateSwitch.addEventListener("click", this.handleAnimateSwitch.bind(this));
    }

    handleInput(event) {
        const value = event.target.value;
        this.element.style.background = this.getConicGradient(value * 3.6);
    }

    handleHideSwitch() {
        this.element.style.display = this.hideSwitch.checked ? "none" : "flex";
    }

    handleAnimateSwitch() {
        if (this.animateSwitch.checked) {
            if (this.animationInterval) clearInterval(this.animationInterval);

            this.animationInterval = setInterval(() => {
                this.startDeg++;
                this.element.style.background = this.getConicGradient(this.startDeg);

                if (this.startDeg === 360) {
                    this.startDeg = 0;
                }
            }, this.config.speed);
        } else {
            if (this.animationInterval) clearInterval(this.animationInterval);

            this.element.style.background = this.getConicGradient(this.radiusInput.value * 3.6);
        }
    }

    getConicGradient(value) {
        return `conic-gradient(${this.config.primaryColor} ${value}deg, ${this.config.secondaryColor} 0deg)`
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const progressBar = new ProgressBar('progressBar', { 
        speed: 10
    });
});
