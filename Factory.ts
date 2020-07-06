abstract class Creator {
  public abstract createDialog(): Product;
  public render(title: string, message: string): string {
    const product = this.createDialog();
    product.update(title, message);
    return product.render();
  }
}

class MacOSCreator extends Creator {
  public createDialog(): Product {
    return new MacOSDialog();
  }
}

class WindowsCreator extends Creator {
  public createDialog(): Product {
    return new WindowsDialog();
  }
}

class MacOSDialog implements Product {
  message: string;
  visible: boolean;
  title: string;

  constructor() {
    this.visible = false;
    this.title = '';
    this.message = '';
  }

  hide(): void {
    this.visible = false;
  }
  update(title: string, message: string): void {
    this.title = title;
    this.message = message;
  }
  render(): string {
    return `
      <div class="macos-dialog">
        <h2>${this.title};</h2>
        <p class="dialog-content">
        ${this.message}
        </p>
      </div>
    `;
  }
}
class WindowsDialog implements Product {
  message: string;
  visible: boolean;
  title: string;

  constructor() {
    this.visible = false;
    this.title = '';
    this.message = '';
  }

  hide(): void {
    this.visible = false;
  }
  update(title: string, message: string): void {
    this.title = title;
    this.message = message;
  }
  render(): string {
    return `
      <div class="windows-dialog">
        <h2>${this.title};</h2>
        <p class="dialog-content">
        ${this.message}
        </p>
      </div>
    `;
  }
}

interface Product {
  title: string;
  message: string;
  visible: boolean;
  hide(): void;
  update(title: string, message: string): void;
  render(): string;
}

const MacOSproduct = new MacOSCreator();
const WindowsProduct = new WindowsCreator();
console.log(MacOSproduct.render('Hello', 'MacOC'));
console.log(WindowsProduct.render('Hello', 'Windows'));
