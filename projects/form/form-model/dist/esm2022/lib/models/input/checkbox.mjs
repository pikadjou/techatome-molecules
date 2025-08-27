import { InputBase } from './base';
export class InputCheckBox extends InputBase {
    constructor(options = {}) {
        super(options);
        this.controlType = 'checkbox';
        if (options.toggle === true) {
            this.controlType = 'toggle';
        }
        if (!this.value) {
            this.value = false;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZGVscy9pbnB1dC9jaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsU0FBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBTS9DLE1BQU0sT0FBTyxhQUFjLFNBQVEsU0FBa0I7SUFHbkQsWUFBWSxVQUEwQixFQUFFO1FBQ3RDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUhSLGdCQUFXLEdBQUcsVUFBVSxDQUFDO1FBS2hDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztRQUM5QixDQUFDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNyQixDQUFDO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUlucHV0QmFzZSwgSW5wdXRCYXNlIH0gZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJSW5wdXRDaGVja0JveCBleHRlbmRzIElJbnB1dEJhc2U8Ym9vbGVhbj4ge1xuICB0b2dnbGU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgSW5wdXRDaGVja0JveCBleHRlbmRzIElucHV0QmFzZTxib29sZWFuPiB7XG4gIG92ZXJyaWRlIGNvbnRyb2xUeXBlID0gJ2NoZWNrYm94JztcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJSW5wdXRDaGVja0JveCA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICBpZiAob3B0aW9ucy50b2dnbGUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuY29udHJvbFR5cGUgPSAndG9nZ2xlJztcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==