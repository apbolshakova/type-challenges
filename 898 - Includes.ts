/*
  Implement the JavaScript `Array.includes` function in the type system. A type takes the two arguments. The output should be a boolean `true` or `false`.
  
  For example:
  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
*/

type Includes<T extends readonly any[], U> = (
  {[A in keyof T]: Equal<T[A], U> }
) extends false[] ? false : true
