import { InputCheckBox } from "./input/checkbox";
import { InputColorPicker } from "./input/colorPicker";
import { InputDropdown } from "./input/dropdown";
import { InputImages } from "./input/images";
import { InputLabel } from "./input/label";
import { InputLogo } from "./input/logo";
import { InputNumber } from "./input/number";
import { InputPanel } from "./input/panel";
import { InputRadio } from "./input/radio";
import { InputSchema } from "./input/schema";
import { InputTextarea } from "./input/textarea";
import { InputTextBox } from "./input/textbox";
import { InputUpload } from "./input/upload";
import { InputWysiswyg } from "./input/wysiswyg";
export class InputFactory {
    static getInput(key, options) {
        if (options.templateChildren) {
            options.children = options.templateChildren();
        }
        switch (key) {
            case "InputCheckBox":
                return new InputCheckBox(options);
            case "InputRadio":
                return new InputRadio(options);
            case "InputColorPicker":
                return new InputColorPicker(options);
            case "InputDropdown":
                return new InputDropdown(options);
            case "InputImages":
                return new InputImages(options);
            case "InputLabel":
                return new InputLabel(options);
            case "InputLogo":
                return new InputLogo(options);
            case "InputNumber":
                return new InputNumber(options);
            case "InputPanel":
                return new InputPanel(options);
            case "InputSchema":
                return new InputSchema(options);
            case "InputTextarea":
                return new InputTextarea(options);
            case "InputTextBox":
                return new InputTextBox(options);
            case "InputWysiswyg":
                return new InputWysiswyg(options);
            case "InputUpload":
                return new InputUpload(options);
            default:
                return new InputTextBox(options);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbW9kZWxzL2ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQWlCakQsTUFBTSxPQUFPLFlBQVk7SUFDaEIsTUFBTSxDQUFDLFFBQVEsQ0FDcEIsR0FBcUIsRUFDckIsT0FBOEI7UUFFOUIsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUM3QixPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2hELENBQUM7UUFFRCxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ1osS0FBSyxlQUFlO2dCQUNsQixPQUFPLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDLEtBQUssWUFBWTtnQkFDZixPQUFPLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pDLEtBQUssa0JBQWtCO2dCQUNyQixPQUFPLElBQUksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkMsS0FBSyxlQUFlO2dCQUNsQixPQUFPLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDLEtBQUssYUFBYTtnQkFDaEIsT0FBTyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsQyxLQUFLLFlBQVk7Z0JBQ2YsT0FBTyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqQyxLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoQyxLQUFLLGFBQWE7Z0JBQ2hCLE9BQU8sSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEMsS0FBSyxZQUFZO2dCQUNmLE9BQU8sSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMsS0FBSyxhQUFhO2dCQUNoQixPQUFPLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLEtBQUssZUFBZTtnQkFDbEIsT0FBTyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwQyxLQUFLLGNBQWM7Z0JBQ2pCLE9BQU8sSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkMsS0FBSyxlQUFlO2dCQUNsQixPQUFPLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDLEtBQUssYUFBYTtnQkFDaEIsT0FBTyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsQztnQkFDRSxPQUFPLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tIFwiLi9pbnB1dC9iYXNlXCI7XG5pbXBvcnQgeyBJbnB1dENoZWNrQm94IH0gZnJvbSBcIi4vaW5wdXQvY2hlY2tib3hcIjtcbmltcG9ydCB7IElucHV0Q29sb3JQaWNrZXIgfSBmcm9tIFwiLi9pbnB1dC9jb2xvclBpY2tlclwiO1xuaW1wb3J0IHsgSW5wdXREcm9wZG93biB9IGZyb20gXCIuL2lucHV0L2Ryb3Bkb3duXCI7XG5pbXBvcnQgeyBJSW5wdXRDaGlsZHJlbkR5bmFtaWMgfSBmcm9tIFwiLi9pbnB1dC9keW5hbWljXCI7XG5pbXBvcnQgeyBJbnB1dEltYWdlcyB9IGZyb20gXCIuL2lucHV0L2ltYWdlc1wiO1xuaW1wb3J0IHsgSW5wdXRMYWJlbCB9IGZyb20gXCIuL2lucHV0L2xhYmVsXCI7XG5pbXBvcnQgeyBJbnB1dExvZ28gfSBmcm9tIFwiLi9pbnB1dC9sb2dvXCI7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gXCIuL2lucHV0L251bWJlclwiO1xuaW1wb3J0IHsgSW5wdXRQYW5lbCB9IGZyb20gXCIuL2lucHV0L3BhbmVsXCI7XG5pbXBvcnQgeyBJbnB1dFJhZGlvIH0gZnJvbSBcIi4vaW5wdXQvcmFkaW9cIjtcbmltcG9ydCB7IElucHV0U2NoZW1hIH0gZnJvbSBcIi4vaW5wdXQvc2NoZW1hXCI7XG5pbXBvcnQgeyBJbnB1dFRleHRhcmVhIH0gZnJvbSBcIi4vaW5wdXQvdGV4dGFyZWFcIjtcbmltcG9ydCB7IElucHV0VGV4dEJveCB9IGZyb20gXCIuL2lucHV0L3RleHRib3hcIjtcbmltcG9ydCB7IElucHV0VXBsb2FkIH0gZnJvbSBcIi4vaW5wdXQvdXBsb2FkXCI7XG5pbXBvcnQgeyBJbnB1dFd5c2lzd3lnIH0gZnJvbSBcIi4vaW5wdXQvd3lzaXN3eWdcIjtcblxuZXhwb3J0IHR5cGUgRmFjdG9yeUlucHV0VHlwZSA9XG4gIHwgXCJJbnB1dENoZWNrQm94XCJcbiAgfCBcIklucHV0UmFkaW9cIlxuICB8IFwiSW5wdXRDb2xvclBpY2tlclwiXG4gIHwgXCJJbnB1dERyb3Bkb3duXCJcbiAgfCBcIklucHV0SW1hZ2VzXCJcbiAgfCBcIklucHV0TGFiZWxcIlxuICB8IFwiSW5wdXRMb2dvXCJcbiAgfCBcIklucHV0TnVtYmVyXCJcbiAgfCBcIklucHV0UGFuZWxcIlxuICB8IFwiSW5wdXRTY2hlbWFcIlxuICB8IFwiSW5wdXRUZXh0YXJlYVwiXG4gIHwgXCJJbnB1dFRleHRCb3hcIlxuICB8IFwiSW5wdXRXeXNpc3d5Z1wiXG4gIHwgXCJJbnB1dFVwbG9hZFwiO1xuZXhwb3J0IGNsYXNzIElucHV0RmFjdG9yeSB7XG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5wdXQoXG4gICAga2V5OiBGYWN0b3J5SW5wdXRUeXBlLFxuICAgIG9wdGlvbnM6IElJbnB1dENoaWxkcmVuRHluYW1pY1xuICApOiBJbnB1dEJhc2U8YW55PiB7XG4gICAgaWYgKG9wdGlvbnMudGVtcGxhdGVDaGlsZHJlbikge1xuICAgICAgb3B0aW9ucy5jaGlsZHJlbiA9IG9wdGlvbnMudGVtcGxhdGVDaGlsZHJlbigpO1xuICAgIH1cblxuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlIFwiSW5wdXRDaGVja0JveFwiOlxuICAgICAgICByZXR1cm4gbmV3IElucHV0Q2hlY2tCb3gob3B0aW9ucyk7XG4gICAgICBjYXNlIFwiSW5wdXRSYWRpb1wiOlxuICAgICAgICByZXR1cm4gbmV3IElucHV0UmFkaW8ob3B0aW9ucyk7XG4gICAgICBjYXNlIFwiSW5wdXRDb2xvclBpY2tlclwiOlxuICAgICAgICByZXR1cm4gbmV3IElucHV0Q29sb3JQaWNrZXIob3B0aW9ucyk7XG4gICAgICBjYXNlIFwiSW5wdXREcm9wZG93blwiOlxuICAgICAgICByZXR1cm4gbmV3IElucHV0RHJvcGRvd24ob3B0aW9ucyk7XG4gICAgICBjYXNlIFwiSW5wdXRJbWFnZXNcIjpcbiAgICAgICAgcmV0dXJuIG5ldyBJbnB1dEltYWdlcyhvcHRpb25zKTtcbiAgICAgIGNhc2UgXCJJbnB1dExhYmVsXCI6XG4gICAgICAgIHJldHVybiBuZXcgSW5wdXRMYWJlbChvcHRpb25zKTtcbiAgICAgIGNhc2UgXCJJbnB1dExvZ29cIjpcbiAgICAgICAgcmV0dXJuIG5ldyBJbnB1dExvZ28ob3B0aW9ucyk7XG4gICAgICBjYXNlIFwiSW5wdXROdW1iZXJcIjpcbiAgICAgICAgcmV0dXJuIG5ldyBJbnB1dE51bWJlcihvcHRpb25zKTtcbiAgICAgIGNhc2UgXCJJbnB1dFBhbmVsXCI6XG4gICAgICAgIHJldHVybiBuZXcgSW5wdXRQYW5lbChvcHRpb25zKTtcbiAgICAgIGNhc2UgXCJJbnB1dFNjaGVtYVwiOlxuICAgICAgICByZXR1cm4gbmV3IElucHV0U2NoZW1hKG9wdGlvbnMpO1xuICAgICAgY2FzZSBcIklucHV0VGV4dGFyZWFcIjpcbiAgICAgICAgcmV0dXJuIG5ldyBJbnB1dFRleHRhcmVhKG9wdGlvbnMpO1xuICAgICAgY2FzZSBcIklucHV0VGV4dEJveFwiOlxuICAgICAgICByZXR1cm4gbmV3IElucHV0VGV4dEJveChvcHRpb25zKTtcbiAgICAgIGNhc2UgXCJJbnB1dFd5c2lzd3lnXCI6XG4gICAgICAgIHJldHVybiBuZXcgSW5wdXRXeXNpc3d5ZyhvcHRpb25zKTtcbiAgICAgIGNhc2UgXCJJbnB1dFVwbG9hZFwiOlxuICAgICAgICByZXR1cm4gbmV3IElucHV0VXBsb2FkKG9wdGlvbnMpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG5ldyBJbnB1dFRleHRCb3gob3B0aW9ucyk7XG4gICAgfVxuICB9XG59XG4iXX0=