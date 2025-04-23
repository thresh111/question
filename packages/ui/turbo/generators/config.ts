import type { PlopTypes } from "@turbo/gen";
import fs from "fs";

const beforeAction: PlopTypes.CustomActionFunction = async (answers: any) => {
  const componentPath = answers?.turbo?.paths?.workspace + "/src/components/" + answers?.name;
  const exists = fs.existsSync(componentPath);

  if (exists) {
    throw new Error(`组件 "${answers.name}" 已存在于 src/components/ 目录下，请使用其他名称。`);
  } else {
    return "正在帮你创建组件开发模版...";
  }
};

const afterAction: PlopTypes.CustomActionFunction = async (answers: any) => {
  return "组件创建成功！";
};

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("component", {
    description: "Adds a new agent center ui component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ],
    actions: [
      beforeAction,
      {
        type: "add",
        path: "src/components/{{kebabCase name}}/index.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "add",
        path: "src/components/{{kebabCase name}}/index.module.scss",
      },
      {
        type: "append",
        path: "src/components/index.ts",
        template: 'export * from "./{{kebabCase name}}";',
      },
      afterAction,
    ],
  });
}
