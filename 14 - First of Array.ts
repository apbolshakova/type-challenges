/*
  14 - First of Array
  -------
  Implement a generic `First<T>` that takes an Array `T` and returns it's first element's type.
  
  For example:
  
  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]
  
  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3
  ```
*/

type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;
