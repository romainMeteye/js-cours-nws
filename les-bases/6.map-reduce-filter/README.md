# Map - Reduce - Filter

## Functionnal programming

La programmation fonctionnelle est un paradigme de programmation dans lequel la valeur de sortie d'une fonction dépend 
uniquement des arguments qui lui sont passés, de sorte qu'appeler une fonction un nombre déterminé de fois produira 
toujours le même résultat, peu importe le nombre de fois que vous l'appelerez. Cela contraste avec beaucoup de code 
courant et contemporain, où beaucoup de fonctions fonctionnent avec un état local ou global, ce qui peut finir par 
renvoyer des résultats différents à différentes exécutions. Un changement dans cet état est un effet de bord et, en 
éliminant ces derniers, il peut être plus facile de comprendre et de prédire le comportement de votre code.

## Pourquoi map, reduce et filter ?

Une des clés fondamentales de la programmation fonctionnelle est son utilisation de listes et d'opérations de liste. 
En Javascript, nous avons map, filter et reduce, toutes des fonctions qui, étant donné une liste initiale (tableau : 
array), la transforme en quelque chose d'autre, tout en conservant cette même liste d'origine intacte.

## Map

Parfois nous avons un tableau d'objets pour lequel nous souhaitons modifier / ajouter des propriétés de chaque objet, 
parfois nous avons un tableau de chaînes que nous souhaitons mettre en minuscule. En réalité, il peut y avoir des 
centaines de situations dans lesquelles map est votre sauveur et il est vraiment simple à utiliser.

### Comment l'utiliser ?

Voici un exemple très simple d'utilisation de map :

```javascript
const numbersArray = [1, 2, 3, 4, 5];

const doubledNumbersArray = numbersArray.map(number => number * 2);

console.log(doubledNumbersArray); // [2, 4, 6, 8, 10]
```

### Comment ça marche ?

La method map prend une fonction en argument et retourne un nouveau tableau. Cette fonction est appelée pour chaque
élément du tableau et le résultat de cette fonction est ajouté au nouveau tableau. Le tableau original n'est pas
modifié.

#### Exemple

```javascript
const pages = {
    data: [
      {
        id: 1,
        attributes: {
          title: 'Les Coachs',
          createdAt: '2022-11-05T13:04:17.704Z',
          updatedAt: '2022-11-17T03:41:30.591Z',
          publishedAt: '2022-11-05T13:13:19.595Z',
          slug: 'coachs',
          content: 'Les coachs',
          banner: false,
        },
      },
      {
        id: 5,
        attributes: {
          title: 'Gym Loisirs',
          createdAt: '2022-11-06T10:52:55.164Z',
          updatedAt: '2022-11-23T10:41:17.537Z',
          publishedAt: '2022-11-06T10:52:55.803Z',
          slug: 'gym-loisirs',
          content:
            'La Gym loisirs est une pratique de la gymnastique, sans les contraintes de la compétition, ce qui permet d’apprendre, de progresser tout en restant dans un domaine tout à fait ludique. ',
          banner: true,
        },
      },
    ],
  };

    const pagesArray = pages.data.map((page) => {
        return {
        id: page.id,
        title: page.attributes.title,
        slug: page.attributes.slug,
        content: page.attributes.content,
        banner: page.attributes.banner,
        };
    });

    const displayPages = pagesArray.map((page) => {
        return `<div class="page">
        <h2>${page.title}</h2>
        <p>${page.content}</p>
        </div>`;
    });
```
#### Exemple 2

Ici nous allons retirer les éléments qui ne nous intéressent pas (createdAt, updatedAt, publishedAt) et nous allons
ajouter une propriété "gymPage" qui sera à true si le titre de la page contient le mot "Gym".

```javascript
const pages = {
    data: [
        {
            id: 1,
            attributes: {
                title: 'Les Coachs',
                createdAt: '2022-11-05T13:04:17.704Z',
                updatedAt: '2022-11-17T03:41:30.591Z',
                publishedAt: '2022-11-05T13:13:19.595Z',
                slug: 'coachs',
                content: 'Les coachs',
                banner: false,
            },
        },
        {
            id: 5,
            attributes: {
                title: 'Gym Loisirs',
                createdAt: '2022-11-06T10:52:55.164Z',
                updatedAt: '2022-11-23T10:41:17.537Z',
                publishedAt: '2022-11-06T10:52:55.803Z',
                slug: 'gym-loisirs',
                content:
                    'La Gym loisirs est une pratique de la gymnastique, sans les contraintes de la compétition, ce qui permet d’apprendre, de progresser tout en restant dans un domaine tout à fait ludique. ',
                banner: true,
            },
        },
    ],
};

const pagesArray = pages.data.map((page) => {
    const { id, attributes } = page;
    const { title, slug, content, banner } = attributes;
    return {
        id,
        title,
        slug,
        content,
        banner,
        gymPage: title.includes('Gym'),
    };
});

const displayPages = pagesArray.map((page) => {
    return `<div class="page">
        <h2>
        ${page.gymPage ? 'Gym page' : 'Not a gym page'}
        </h2>
        <p>${page.content}</p>
        </div>`;
});
```

## Filter

Vous vous retrouverez souvent dans la situation où vous aurez besoin de filtrer un tableau en fonction de certaines
valeurs. Par exemple, vous avez un tableau de personnes et vous souhaitez récupérer uniquement les personnes qui
sont majeures. Ou vous avez un tableau de produits et vous souhaitez récupérer uniquement les produits qui sont en
solde.

### Comment l'utiliser ?

C'est un peu similaire à map, si vous avez déjà utilisé map, vous devriez vous sentir à l'aise avec filter.

```javascript
const numbersArray = [1, 2, 3, 4, 5];

const evenNumbersArray = numbersArray.filter(number => number % 2 === 0);

console.log(evenNumbersArray); // [2, 4]
```

### Comment ça marche ?

Filter prend les mêmes arguments que map et fonctionne de manière très similaire. La seule différence est que la 
fonction de rappel doit renvoyer true ou false. Si elle renvoie true, le tableau conserve cet élément et si elle 
renvoie false, l'élément est filtré.

#### Exemple

```javascript
const strings = ['pomme', 'banane', 'orange', 'kiwi', 'poire'];

const fruits = strings.filter((string) => {
    return string.length > 5;
});

console.log(fruits); // ['orange', 'kiwi']
```

Filtrer un tableau d'objets

```javascript
const songs = songs.filter((song) => {
    return song.genre === 'rock';
});
```

## Reduce

Reduce est une méthode qui permet de réduire un tableau à une seule valeur. Par exemple, vous avez un tableau de
nombres et vous souhaitez additionner tous les nombres. Ou vous avez un tableau de personnes et vous souhaitez
calculer la moyenne d'âge des personnes.

### Comment l'utiliser ?

```javascript
const numbersArray = [1, 2, 3, 4, 5];

const sum = numbersArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // 15
```

```javascript
const users = [
    {
        name: 'John',
        age: 25,
    },
    {
        name: 'Jane',
        age: 30,
    },
    {
        name: 'Jack',
        age: 20,
    },
];

const averageAge = users.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.age;
}, 0) / users.length;

console.log(averageAge); // 25
```

### Comment ça marche ?

Reduce prend deux arguments, la fonction de rappel et la valeur initiale. La fonction de rappel prend deux
arguments, l'accumulateur et la valeur courante. L'accumulateur est la valeur qui est retournée par la fonction de
rappel à chaque itération. La valeur initiale est la valeur initiale de l'accumulateur. Si vous ne fournissez pas de
valeur initiale, l'accumulateur prendra la valeur du premier élément du tableau.

## Utiliser les 3 méthodes ensemble

Map, filter et reduce sont des méthodes très puissantes et vous pouvez les utiliser ensemble (chains) pour
résoudre des problèmes complexes.

```javascript
const books = [
    {
        id: 1,
        title: 'Harry Potter',
        totalPages: 300,
        author: 'J.K. Rowling',
    },
    {
        id: 2,
        title: 'Lord of the Rings',
        totalPages: 500,
        author: 'J.R.R. Tolkien',
    },
    {
        id: 3,
        title: 'Game of Thrones',
        totalPages: 700,
        author: 'George R.R. Martin',
    },
];

const bookTitles = books.reduce((acc, currValue) => {
    return acc.concat(currValue);
}, []).map((book) => {
    return {
        ...book,
        totalPages: book.totalPages
    };
}).filter((book) => {
    return book.totalPages > 300;
}).map((book) => {
    return book.title;
});

console.log(bookTitles); // ['Lord of the Rings', 'Game of Thrones']
```  

![alt text](oneal-meme.gif)

## TP / Exercice

À partir de ce endpoint : `https://api.egrouen.net/api/coachs`, afficher la liste des coachs dans un tableau HTML.
Vous ne devez afficher que les coachs qui ont un `degree` égal à content le mot "licence". Nous n'avons pas besoin de 
ces informations : `createdAt`, `updatedAt`, `publishedAt`, `bio`, `slug`.
Enfin vous devrez afficher le nombre de coachs dans un paragraphe HTML juste en dessous du tableau.

Utilisez le fichier `index.html`.
