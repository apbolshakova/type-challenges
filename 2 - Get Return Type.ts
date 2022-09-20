/*
  Implement the built-in `ReturnType<T>` generic without using it.
  
  For example
  const fn = (v: boolean) => {
    if (v)
      return 1
    else
      return 2
  }
  type a = MyReturnType<typeof fn> // should be "1 | 2"
*/

type MyReturnTypes<T extends Function> = T extends (...args: any) => infer R ? R : never
