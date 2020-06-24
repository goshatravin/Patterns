interface Button {
  render(): void;
  onClick(): void;
}
class WindowsButton implements Button {
  public render() {
    console.log('отрендерил');
  }
  public onClick() {
    console.log('click');
  }
}
class WebDialog implements Button {
  public render() {
    console.log('web отрендарил');
  }
  public onClick() {
    console.log('onclikc');
  }
}
abstract class Dialog {
  public abstract createButton(): Button;
  public Say(): void {
    const product = this.createButton();
    console.log(product.render());
  }
}

class WindowsDialog extends Dialog {
  public createButton(): Button {
    return new WindowsButton();
  }
}

const button = new WindowsDialog();
button.Say();
