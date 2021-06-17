

// Activer les boutons
function activate() {
    // Sélectionner tous les boutons
    const recap = document.querySelector('#recap');
    const sortingBtns = recap.querySelectorAll('.btn-filter');

    sortingBtns.forEach((btn) => {
        btn.addEventListener('click', () => {

            // Supprime la classe btn-active
            sortingBtns.forEach((sortingBtn) => {
                if(sortingBtn.classList.contains('btn-active')) {
                    sortingBtn.classList.remove('btn-active');
                }
            })

            // Donne la classe btn-active au bouton
            btn.classList.add('btn-active');
        });
    });
}


// Underline le bouton actif
function underlineBtn() {
    // Sélectionner le bouton active
    const recap = document.querySelector('#recap');
    let activatedBtn = recap.querySelector('.btn-active');

    // Récupère les coordonnées du bouton et Détermine les coordonnées du underlineLink
    let activatedBtnCoords = activatedBtn.getBoundingClientRect();
    const coords = {
        Widht: activatedBtnCoords.width,
        Left: activatedBtnCoords.left + window.scrollX
    };

    // Sélectionne le underlineLink et Donne les coordonnées du bouton actif
    let underline = recap.querySelector("#underlineLink");
    underline.style.width = `${coords.Widht}px`;
    underline.style.transform = `translate(${coords.Left}px, 100%)`;
}


// Donner la classe sortActive au bouton de filtre cliqué
function setSortActive(e) {
    let clickedSortBtn = e.target;
    const filter = document.querySelector('#filtrer');
    let activeSortBtns = filter.querySelectorAll('.sort');

    activeSortBtns.forEach(btn => {
        if(btn.classList.contains('sortActive')) {
            btn.classList.remove('sortActive');
        }
    });

    if(clickedSortBtn.matches('button.sort')) {
        clickedSortBtn.classList.add('sortActive');
    }

    if(clickedSortBtn.parentNode.matches('button.sort')) {
        clickedSortBtn.parentNode.classList.add('sortActive');
    }
}