/* eslint-disable @typescript-eslint/no-explicit-any */
interface ITodoInput {
  value: string;
  onChange(e: any): void;
  onSubmit(): void;
}
declare module "todo_components/Input" {
  import { ComponentType } from "react";

  const ExampleComponent: ComponentType<ITodoInput>; // Use your own props type
  export default ExampleComponent;
}

interface ITodoList {
  items: string[];
}
declare module "todo_components/List" {
  import { ComponentType } from "react";

  const ExampleComponent: ComponentType<Test>; // Use your own props type
  export default ExampleComponent;
}

declare module "*.pdf";
declare module "*.jpg";
declare module "*.png";
declare module "*.svg";
