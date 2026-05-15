
        const dice = document.getElementById('dice');
        const cover = document.getElementById('cover');
        const target = document.getElementById('dice-target');
        const bSpin = document.getElementById('btn-spin');
        const bOpen = document.getElementById('btn-open');

        const faces = ['១', '២', '៣', '៤', '៥', '៦'];

        function spin() {
            cover.classList.remove('cover-open');
            dice.innerText = "?";
            bSpin.disabled = true;
            bOpen.disabled = true;

            setTimeout(() => {
                target.classList.add('spinning');

                setTimeout(() => {
                    target.classList.remove('spinning');
                    dice.innerText = faces[Math.floor(Math.random() * faces.length)];
                    bOpen.disabled = false;
                    bSpin.disabled = false;
                }, 1500);
            }, 500);
        }

        function openPlate() {
            cover.classList.add('cover-open');
            bOpen.disabled = true;
        }
    