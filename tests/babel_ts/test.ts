function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any) {
  return a + b;
}

class Foo1 {
  private foo() {}
}

// abstract class Foo2 {
//   abstract foo ();
// }

// declare class Foo3 {
//   foo();
// }
