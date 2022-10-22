    var $rootElement = document.querySelector(':root')|| {}; // fallback
    var rootStyle = getComputedStyle($rootElement);
    var storageName = 'mode';
    $rootElement.style.setProperty('--dark-blue', 'hsl(220, 16%, 96%)');
    $rootElement.style.setProperty('--light-grayish-blue', 'hsl(233, 26%, 24%)');

    function setMode(mode) {
        localStorage.setItem(storageName, mode);

        if (mode === 'dark') {
            $rootElement.style.setProperty('--dark-blue', 'hsl(220, 16%, 96%)');
            $rootElement.style.setProperty('--light-grayish-blue', 'hsl(233, 26%, 24%)');
            $('.dark-mode-symbol').html('wb_sunny');
        } else {
            $rootElement.style.setProperty('--dark-blue', 'hsl(233, 26%, 24%)');
            $rootElement.style.setProperty('--light-grayish-blue', 'hsl(220, 16%, 96%)');
            $('.dark-mode-symbol').html('dark_mode');
        }

    };

    function setEventListeners(){
        $('#dark-mode').ready(function() {
            var $button = document.getElementById("dark-mode")
            $button.addEventListener("click", function() {

                localStorage.getItem(storageName) === 'dark' ?  setMode('light') : setMode('dark');
                
            });
        });

    };

    setEventListeners();
    setMode(localStorage.getItem(storageName));