# Primitive Types

Les types primitifs sont les types de base de JavaScript et sont au nombre de 5 : 
- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `symbol` (nouveau depuis ES6)

Tous les autres types sont des objets.

### String

Ce type représente une chaîne de caractères. On peut l'initialiser avec des guillemets simples ou doubles. 

```javascript
const str = 'Hello World';
```

On peut utiliser les backticks pour faire des chaînes de caractères multilignes. 

```javascript
const str = `Hello World`;
```  

### Number

Ce type représente un nombre. Il peut être entier ou décimal. 

```javascript
const num = 42; // LE FAMEUX
```

### Boolean

Ce type représente une valeur booléenne. Il peut être soit vrai ou faux. 

```javascript
const bool = true;
```

### Null

Ce type représente une valeur nulle. 

```javascript
const nul = null;
```

### Undefined

Ce type représente une valeur non définie. 

```javascript
let undef;
```

### Symbol

Ce type représente une valeur unique et immuable. 

```javascript
const sym = Symbol('foo');
```

### Explication de Symbol

Les symboles sont des valeurs uniques et immuables. Ils sont utilisés comme clés pour les propriétés d'objets. 

```javascript
const sym = Symbol('foo');

const obj = {
  [sym]: 'bar'
};

console.log(obj[sym]); // bar
```

## Conversion de type  

On peut convertir un type en un autre type. 

```javascript
const num = 42;
const str = num.toString(); // '42'
```  

Cependant, on ne peut pas convertir n'importe quel type en n'importe quel type. 

```javascript
const num = 42;
const bool = num.toBoolean(); // TypeError
```

## Opérateurs

Les opérateurs sont des symboles qui permettent d'effectuer des opérations sur des valeurs.
Ils sont classés en 3 catégories :  

- Opérateurs arithmétiques ;
- Opérateurs de comparaison ;
- Opérateurs logiques.

### Opérateurs arithmétiques

Les opérateurs arithmétiques sont utilisés pour effectuer des opérations arithmétiques, comme leur nom l'indique. Par
exemple, on peut additionner deux nombres avec l'opérateur `+`. 

```javascript
const num = 1 + 1; // 2
```

On peut aussi utiliser les opérateurs `-`, `*` et `/`. 

```javascript
const num = 1 - 1; // 0
const num = 1 * 1; // 1
const num = 1 / 1; // 1
```

On peut aussi utiliser l'opérateur `%` pour obtenir le reste d'une division. 

```javascript
const num = 1 % 1; // 0
```

### Opérateurs de comparaison

Les opérateurs de comparaison sont utilisés pour comparer deux valeurs. Par exemple, on peut comparer deux nombres avec
l'opérateur `===`. 

```javascript
const bool = 1 === 1; // true
```

On peut aussi utiliser les opérateurs `!==`, `>`, `<`, `>=` et `<=`.

### Opérateurs logiques  

Les opérateurs logiques sont utilisés pour combiner des valeurs booléennes. Par exemple, on peut combiner deux valeurs :
`true` et `false` avec l'opérateur `&&`. 

```javascript
const bool =  true; // true
const display = bool && 'Hello World'; // 'Hello World'
```

On peut aussi utiliser les opérateurs `||` et `!`. Qui sont respectivement l'opérateur OU et l'opérateur NON.

## Ressources complémentaires : 

- [MDN - Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)