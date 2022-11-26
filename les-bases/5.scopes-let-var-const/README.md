# Les scopes  

Les scopes sont des espaces de nommage. Ils permettent de définir des variables et des fonctions.  
Chaque scope a un parent. Le scope global est le parent de tous les autres scopes.

## Les scopes en JavaScript

En JavaScript, il existe 3 types de scopes :

- Le scope global ;
- Le scope de fonction ;
- Le scope de bloc.

Exemple :

```javascript
// global scope
const num = 42;

function start() {
  // function scope
  const str = 'Hello';
  function last() {
    // nested function scope
    const bool = true;
  }
}

if (num > 0) {
  // block scope
  const bool = true;
}
```

### Le scope global

Le scope global est le scope parent de tous les autres scopes. Il est créé au moment où le script est exécuté. Il se 
termine lorsque le script est terminé. Il contient les variables et les fonctions définies en dehors de tout scope et
les variables définies ici sont accessibles partout dans le script.

### Le scope de fonction

Le scope de fonction est créé au moment où une fonction est appelée. Il se termine lorsque la fonction est terminée.
Il contient les variables et les fonctions définies dans la fonction et les variables définies ici sont accessibles
dans la fonction et dans tous les scopes enfants.

```javascript
var authorized = false;

function allow() {
  let userAge = 42;
  if (userAge > 18) {
    authorized = true;
  }
}

allow();

console.log(authorized); // true
console.log(userAge); // ReferenceError
```

### Le scope de bloc

Le scope de bloc est créé au moment où un bloc est exécuté. Il se termine lorsque le bloc est terminé. Il contient
les variables et les fonctions définies dans le bloc et les variables définies ici sont accessibles dans le bloc et
dans tous les scopes enfants.

### const vs let vs var

En JavaScript, il existe 3 mots clés pour déclarer une variable : `const`, `let` et `var`. Le scope de ces variables est
différent selon le mot clé utilisé et le type de scope dans lequel elles sont déclarées.

#### const

Les variables déclarées avec `const` sont accessibles uniquement dans le scope dans lequel elles sont déclarées. Elles
ne peuvent pas être réassignées.

```javascript
const num = 42;
if (num > 0) {
  const bool = true;
}
console.log(num); // 42
console.log(bool); // ReferenceError
```

#### let

Les variables déclarées avec `let` sont accessibles uniquement dans le scope dans lequel elles sont déclarées. Elles
peuvent être réassignées.

```javascript
let num = 42;
let globalBool = false;
if (num > 0) {
  let bool = true;
  globalBool = true;
}
console.log(num); // 42
console.log(globalBool); // true
console.log(bool); // ReferenceError
```

#### var

Les variables déclarées avec `var` sont accessibles dans le scope dans lequel elles sont déclarées et dans tous les
scopes enfants. Elles peuvent être réassignées.

```javascript
for (var i = 0; i < 10; i++) {
  console.log("var inside for loop", i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}
console.log("var outside for loop", i); // 10

for (let j = 0; j < 10; j++) {
  console.log("let inside for loop", j); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}
console.log("let outside for loop", j); // ReferenceError
```

Dans cet exemple on voit que la variable `i` est accessible en dehors de la boucle `for` alors que la variable `j` ne
l'est pas. C'est parce que `i` a été déclarée avec `var` et `j` avec `let`. `var` déclare une variable dans le scope
global alors que `let` déclare une variable dans le scope local. Il est donc préférable d'utiliser `var` pour déclarer
des variables globales et `let` pour déclarer des variables locales.


### TP / Exercice

Dans cet exercice, vous allez créer une fonction pour vérifier si un utilisateur est autorisé à accéder à une page.
Pour cela, vous allez créer une fonction `isAuthorized` qui prend en paramètre l'âge de l'utilisateur et qui retourne
`true` si l'utilisateur est autorisé. Utilisez le fichier index.html.

Exemple : 

```javascript
var authorized = false;

function isAuthorized(userAge) {
  // TODO: ajouter votre code ici
}

authorized = isAuthorized(42);
```