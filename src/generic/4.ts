/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Text {
  title: string;
}

class Component<T extends Text> {
  constructor(public props: T) {}
}

class Page extends Component<Text> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
