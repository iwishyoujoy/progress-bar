document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.getElementById("progressBar");
    const radiusInput = document.getElementById("input");
    const hideSwitch = document.getElementById("hide");
    const animateSwitch = document.getElementById("animate");

    const speed = 5;
    let startDeg = 0;
    let animationInterval;
    
    radiusInput.addEventListener("input", () => {
        progressBar.style.background = `conic-gradient(#005dff ${radiusInput.value * 3.6}deg, #dfe6f0 0deg)`;
    })

    hideSwitch.addEventListener("click", function() {
        progressBar.style.display = this.checked ? "none" : "flex";
    })

    animateSwitch.addEventListener("click", function() {
        if (this.checked){
            if (animationInterval) clearInterval(animationInterval);

            animationInterval = setInterval(() => {
                startDeg++;
                progressBar.style.background = `conic-gradient(#005dff ${startDeg}deg, #dfe6f0 0deg)`;

                if (startDeg === 360) {
                    startDeg = 0;
                }
            }, speed);
        }
        else {
            if (animationInterval) clearInterval(animationInterval);

            progressBar.style.background = `conic-gradient(#005dff ${radiusInput.value * 3.6}deg, #dfe6f0 0deg)`;
        }
    })

});
