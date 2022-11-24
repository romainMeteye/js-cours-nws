# Les call stacks ?

## « Pile d'exécution »

Javascript est un langage dit "single thread" ce qui signifie qu'il ne peut gérer qu'une seule tâĉhe à la fois ou un morceau 
de code. On ne peut faire qu'une seule chose à la fois. On dit donc qu'il n'a qu'une pile d'exécution,
autrement dit : un seul call stack, le tout correspond donc à un modèle qu'on nomme « Javascript Concurrency Model », 
implémenté depuis dans le moteur [V8](https://v8.dev/).

### Pourquoi ?  

Pour mieux comprendre regardons cette image :  

![Image](stack-heap-queue.png)  

Explications :  

```javascript
function foo(b){
  var a = 5;
  return a * b + 10;
}

function bar(x){
  var y = 3;
  return foo(x * y);
}

console.log(bar(6)); // l'output sera de ?
```  

En exécutant ce code on va regarde en premier la fonction principale, là où tout commence. On démarre donc depuis :  
```javascript
console.log(bar(6));
```
Qui est ensuite poussée dans la stack (pile), la frame suivante (cadre) est donc la fonction **bar** et ses arguments qui à 
son tour appelle la function **foo** qui est encore remise tout en haut de la stack et puisque son return est immédiat 
elle est finalement ejectée de la stack. Après coup **bar** est ejectée (popped out) également pour finalement obtenir
notre console.log qui va print l'output.
