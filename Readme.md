Proiect: Catalog de filme
Master: E-Gov
Mihai Trandafirescu
Alexandra Onose
Claudiu Neagu
----------------------------------------------------------------------------------------------------------------

Am implementat un catalog de filme in arhitectura Microservices, folosind React pentru serviciul de frontend (react_fe), Node Express pentru cele 3 servicii de backend (HTTP_message_broker, movie_processing si user_management_processing) si PostgreSQL pentru serviciul de baza de date (db).

Aplicatia contine endpoint-uri pentru redarea filmelor trending, top rated, detalii de filme, autocomplete pt search, dar si log in si register pentru utilizatori. HTTP_message_broker trimite catre movie_processing request-urile legate de redarea filmelor si catre user_management_processing cele legate de login sau register. Apoi, user_management_processing parseaza body-ul si face query-uri catre baza de date pentru informatiile dorite. O diagrama cu arhitectura microserviciilor se va regasi in arhiva.

De asemenea, folosim si Adminer si Visualiser pentru administrarea si vizualizarea aplicatiei dezvoltata in Docker Swarm. Avem 2 fisiere docker-compose pt stack, unul cu secrete(de production) si altul fara secrete(pentru deployment).

Initial, imaginile sunt create folosind comanda: 
    docker build -t image_name .
Se ruleaza comanda de mai sus in directorul parinte al fiecarui microserviciu(image_name corespunde cu numele din fisierul de docker-compose)

Dupa ce imaginile au fost create, se ruleaza urmatoarea comanda pentru a crea stack-ul de containere:
    docker stack deploy -c docker-compose-secrets.yml proiectCC

Odata ce stack-ul are fiecare serviciu Running (docker stack ps proiectCC), serviciul de frontend se poate apela din browser. Ca exemplu de URL:
    http://192.168.149.128:3000/signin