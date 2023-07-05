{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = "Jaehyuk";
  const address: Text = "Korea";
  type num = number;

  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "Jaehyuk",
    age: 29,
  };

  /**
   * String Listeral Types
   */
  type Name = "name";
  let JaeName: Name;
  JaeName = "name";
  type Json = "json";
  const json: Json = "json";

  type Boal = true;
  //   const iscat: Boal = false; //error
}
