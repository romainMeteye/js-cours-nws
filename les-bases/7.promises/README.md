# Promises (promesses)  

![Promises](promise-meme.png)

Les Promises (promesses) sont utilisées pour éviter les problèmes de callback hell (enfer des callbacks) et pour écrire du code
asynchrone de manière plus lisible.

Ce sont des objets qui représentent une valeur qui peut être disponible maintenant, dans le futur, ou jamais.
Pour conceptuellement comprendre les promesses, pensez à une promesse comme à une promesse de paiement : vous promettez
de payer quelqu'un d'ici à une semaine. Cela peut être vrai, faux ou incertain. Mais dans tous les cas, vous avez fait une
promesse et on attend une réponse.

Définition du mot promesse en français :  

> promesse (n.f.)  
> 1. Engagement pris par une personne de faire ou de ne pas faire quelque chose.
> 2. Engagement pris par une personne de faire quelque chose à une autre personne.
> 3. Engagement pris par une personne de faire quelque chose à une autre personne dans un délai donné.
> 4. Engagement pris par une personne de faire quelque chose à une autre personne dans un délai donné, en échange de 
quelque chose.  

Finalement une Promise en JavaScript est un reflet de la définition du mot promesse, c'est un engagement pris de faire
ou de ne pas faire quelque chose. Une Promise peut être tenue, rompue ou incertaine. Si une Promise
est tenue, elle est résolue (resolve). Si une Promise est rompue, elle est rejetée (reject). Si une Promise est incertaine, elle est
en attente (pending).


### Syntaxe d'une Promise

```javascript
const promise = new Promise((resolve, reject) => {
  // fonction asynchrone qui peut être résolue ou rejetée
  //
  //   resolve(someValue); // fulfilled
  // ou
  //   reject("failure reason"); // rejected
});
```

## Promise tenue

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('je promets de payer');
    }, 1000);
});

promise.then((value) => {
  console.log(value); // Je promets de payer
});
```

## Promise rompue

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("J'ai oublié de payer");
    }, 1000);
});

promise.catch((error) => {
  console.log(error); // J'ai oublié de payer
});
console.log(promise); // Promise { <pending> }
```

## Promise incertaine

```javascript
const url = 'https://jsonplaceholder.typicode.com/posts/1';

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error));
  }, 5000);
});

console.log('Attente de la promesse');

promise.then((value) => {
  console.log(value); // { userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto' }
}).catch((error) => {
  console.log(error); // TypeError: Failed to fetch
});
console.log(promise); // Promise { <pending> }
```

## Promesse en chaîne

```javascript
const url = 'https://jsonplaceholder.typicode.com/posts/1';
const url2 = 'https://jsonplaceholder.typicode.com/posts/2';

const promise = new Promise((resolve, reject) => {
  fetch(url)
    .then(response => response.json())
    .then(json => resolve(json))
    .catch(error => reject(error));
});

const promise2 = new Promise((resolve, reject) => {
  fetch(url2)
    .then(response => response.json())
    .then(json => resolve(json))
    .catch(error => reject(error));
});

promise.then((value) => {
  console.log(value); // { userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto' }
  return promise2;
}).then((value) => {
  console.log(value); // { userId: 1, id: 2, title: 'qui est esse', body: 'est rerum tempore vitae↵sequi sint nihil reprehenderit dolor beatae ea dolores neque↵fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis↵qui aperiam non debitis possimus qui neque nisi nulla' }
}).catch((error) => {
  console.log(error); // TypeError: Failed to fetch
});
```

## Promises en parallèle

Les Promises en parallèle sont utiles lorsque vous avez besoin de plusieurs Promises en même temps. Par exemple, 
vous avez besoin de récupérer des datas sur plusieurs API ou endpoints en même temps. Cependant, il faut que toutes 
les Promises soient résolues pour que la Promise finale soit résolue. Si une Promise est rejetée, la Promise finale
le sera aussi.

```javascript
const url = 'https://jsonplaceholder.typicode.com/posts/1';
const url2 = 'https://jsonplaceholder.typicode.com/posts/2';

const promise = new Promise((resolve, reject) => {
  fetch(url)
    .then(response => response.json())
    .then(json => resolve(json))
    .catch(error => reject(error));
});

const promise2 = new Promise((resolve, reject) => {
  fetch(url2)
    .then(response => response.json())
    .then(json => resolve(json))
    .catch(error => reject(error));
});

Promise.all([promise, promise2]).then((values) => {
  console.log(values); // [{ userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto' }, { userId: 1, id: 2, title: 'qui est esse', body: 'est rerum tempore vitae↵sequi sint nihil reprehenderit dolor beatae ea dolores neque↵fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis↵qui aperiam non debitis possimus qui neque nisi nulla' }]
}).catch((error) => {
  console.log(error); // TypeError: Failed to fetch
});
```

## Promises en parallèle avec un seul résultat

Le résultat de Promise.any() est le premier résultat de la Promise qui est résolue. Si toutes les Promises sont 
rejetées, la Promise finale est rejetée. Un seul résultat est retourné même si plusieurs Promises sont résolues.

```javascript
const url = 'https://jsonplaceholder.typicode.com/posts/1';
const url2 = 'https://jsonplaceholder.typicode.com/posts/2';

const promise = new Promise((resolve, reject) => {
  fetch(url)
    .then(response => response.json())
    .then(json => resolve(json))
    .catch(error => reject(error));
});

const promise2 = new Promise((resolve, reject) => {
  fetch(url2)
    .then(response => response.json())
    .then(json => resolve(json))
    .catch(error => reject(error));
});

Promise.any([promise, promise2], 1).then((values) => {
  console.log(values); // [{ userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto' }]
}).catch((error) => {
  console.log(error); // TypeError: Failed to fetch
});
```

### TP / Exercice

Créer une Promise avec une des apis suivantes (ou les deux si vous êtes chauds) et injecter le résultat dans le DOM.
- https://jsonplaceholder.typicode.com/posts/1 => **afficher le titre**
- https://api.chucknorris.io/jokes/random => **afficher la blague**

Éléments à afficher dans le DOM :
- [api].title => titre du post
- [api].value => valeur de la blague

## Ressources complémentaires

  * [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise)
  * [Promise.all](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/all)
  * [Promise.any](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/any)



