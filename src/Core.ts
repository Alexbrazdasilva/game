class Core {
  canva: HTMLCanvasElement;
  contextDrawn: CanvasRenderingContext2D;
  mousePosition: { x: number; y: number };
  constructor(selectorElement: string) {
    this.canva = document.querySelector(selectorElement) as HTMLCanvasElement;
    this.contextDrawn = this.canva.getContext("2d") as CanvasRenderingContext2D;
    this.mousePosition = { x: 0, y: 0 };
    this.onLoad();
  }
  private setSizeOnCanva({ width, height }: { width: number; height: number }) {
    this.canva.width = width;
    this.canva.height = height;
  }
  private notifyMember() {
    const coords = this.mousePoints;
    const self = this;
    window.requestAnimationFrame(() => {
      self.drawn(coords);
    });
  }
  get mousePoints() {
    return this.mousePosition;
  }
  get canvaSize() {
    return { w: this.canva.width, h: this.canva.height };
  }
  updateMousePosition({ clientX, clientY }: MouseEvent) {
    this.mousePosition = {
      x: clientX,
      y: clientY,
    };
    this.notifyMember();
  }
  clearDrawn() {
    const { h, w } = this.canvaSize;
    this.contextDrawn.clearRect(0, 0, w, h);
  }
  drawn(coords: { x: number; y: number }) {
    this.clearDrawn();
    this.contextDrawn.beginPath();
    this.contextDrawn.fillStyle = "#1f1f1f";
    this.contextDrawn.fillRect(coords.x, coords.y, 50, 50);
    this.contextDrawn.fillText("This is canva drawer", 20, 20);
  }
  onLoad() {
    this.setSizeOnCanva({
      height: window.screen.height,
      width: window.screen.width,
    });
  }
}

export default Core;
