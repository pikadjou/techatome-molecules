import { signal } from '@angular/core';
/** État partagé entre un parent et une modale : entrée `T` poussée à l'ouverture, résultat `U` rendu à la fermeture. */
export class ModalState {
    constructor() {
        this.open = signal(false);
        this.input = signal(null);
        this.output = signal(null);
    }
    asked(input) {
        this.input.set(input);
        this.output.set(null);
        this.open.set(true);
    }
    completed(output) {
        this.output.set(output);
        this.open.set(false);
    }
    /** Fermeture sans résultat. */
    dismissed() {
        this.open.set(false);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2hlbHBlcnMvbW9kYWwvc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2Qyx3SEFBd0g7QUFDeEgsTUFBTSxPQUFPLFVBQVU7SUFBdkI7UUFDUyxTQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLFVBQUssR0FBRyxNQUFNLENBQXVCLElBQUksQ0FBQyxDQUFDO1FBQzNDLFdBQU0sR0FBRyxNQUFNLENBQVcsSUFBSSxDQUFDLENBQUM7SUFpQnpDLENBQUM7SUFmUSxLQUFLLENBQUMsS0FBUTtRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRU0sU0FBUyxDQUFDLE1BQVM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELCtCQUErQjtJQUN4QixTQUFTO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2lnbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiDDiXRhdCBwYXJ0YWfDqSBlbnRyZSB1biBwYXJlbnQgZXQgdW5lIG1vZGFsZSA6IGVudHLDqWUgYFRgIHBvdXNzw6llIMOgIGwnb3V2ZXJ0dXJlLCByw6lzdWx0YXQgYFVgIHJlbmR1IMOgIGxhIGZlcm1ldHVyZS4gKi9cbmV4cG9ydCBjbGFzcyBNb2RhbFN0YXRlPFQsIFU+IHtcbiAgcHVibGljIG9wZW4gPSBzaWduYWwoZmFsc2UpO1xuICBwdWJsaWMgaW5wdXQgPSBzaWduYWw8VCB8IG51bGwgfCB1bmRlZmluZWQ+KG51bGwpO1xuICBwdWJsaWMgb3V0cHV0ID0gc2lnbmFsPFUgfCBudWxsPihudWxsKTtcblxuICBwdWJsaWMgYXNrZWQoaW5wdXQ6IFQpIHtcbiAgICB0aGlzLmlucHV0LnNldChpbnB1dCk7XG4gICAgdGhpcy5vdXRwdXQuc2V0KG51bGwpO1xuICAgIHRoaXMub3Blbi5zZXQodHJ1ZSk7XG4gIH1cblxuICBwdWJsaWMgY29tcGxldGVkKG91dHB1dDogVSkge1xuICAgIHRoaXMub3V0cHV0LnNldChvdXRwdXQpO1xuICAgIHRoaXMub3Blbi5zZXQoZmFsc2UpO1xuICB9XG5cbiAgLyoqIEZlcm1ldHVyZSBzYW5zIHLDqXN1bHRhdC4gKi9cbiAgcHVibGljIGRpc21pc3NlZCgpIHtcbiAgICB0aGlzLm9wZW4uc2V0KGZhbHNlKTtcbiAgfVxufVxuIl19