#Portal Edukacyjny - Logowanie przez Enter
Umożliwia logowanie się na pe.szczecin.pl przez wcisnięcie klawisza Enter

##Instrukcje instalacji
###Wersja Firefox:
(Link)[https://addons.mozilla.org/pl/firefox/addon/pepe/]

###Wersja Chrome:
(Link)[https://github.com/mkopec/pepe/blob/master/bin/chrome.crx?raw=true]
Ten plik należy przeciągnąć upuścić w ustawieniach Chrome, w zakładce Rozszerzenia

##Instrukcje kompilacji
###Wersja Firefox:
Wymagania:
- `make`
- `jpm`

W folderze głównym, w terminalu wpisz: `make`

W folderze bin/ pojawi się skompilowana wersja dodatku (plik .xpi).

###Wersja Chrome:
1. Otwórz Chrome
2. Wejdź w ustawienia
3. Otwórz zakładkę Rozszerzenia
4. Wybierz opcję Tryb programisty
5. Kliknij "Umieść rozszerzenie w pakiecie"
6. Wybierz folder chrome/

W głównym folderze pojawi się skompilowana wersja dodatku (plik .crx).
