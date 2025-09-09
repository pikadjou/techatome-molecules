import { InputCheckBox } from './input/checkbox';
import { InputColorPicker } from './input/colorPicker';
import { InputDropdown } from './input/dropdown';
import { InputImages } from './input/images';
import { InputLabel } from './input/label';
import { InputLogo } from './input/logo';
import { InputNumber } from './input/number';
import { InputPanel } from './input/panel';
import { InputRadio } from './input/radio';
import { InputSchema } from './input/schema';
import { InputTextarea } from './input/textarea';
import { InputTextBox } from './input/textbox';
import { InputUpload } from './input/upload';
import { InputWysiswyg } from './input/wysiswyg';
export class InputFactory {
    static getInput(key, options) {
        if (options.templateChildren) {
            options.children = options.templateChildren();
        }
        switch (key) {
            case 'InputCheckBox':
                return new InputCheckBox(options);
            case 'InputRadio':
                return new InputRadio(options);
            case 'InputColorPicker':
                return new InputColorPicker(options);
            case 'InputDropdown':
                return new InputDropdown(options);
            case 'InputImages':
                return new InputImages(options);
            case 'InputLabel':
                return new InputLabel(options);
            case 'InputLogo':
                return new InputLogo(options);
            case 'InputNumber':
                return new InputNumber(options);
            case 'InputPanel':
                return new InputPanel(options);
            case 'InputSchema':
                return new InputSchema(options);
            case 'InputTextarea':
                return new InputTextarea(options);
            case 'InputTextBox':
                return new InputTextBox(options);
            case 'InputWysiswyg':
                return new InputWysiswyg(options);
            case 'InputUpload':
                return new InputUpload(options);
            default:
                return new InputTextBox(options);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbW9kZWxzL2ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQWlCakQsTUFBTSxPQUFPLFlBQVk7SUFDaEIsTUFBTSxDQUFDLFFBQVEsQ0FDcEIsR0FBcUIsRUFDckIsT0FBOEI7UUFFOUIsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUM3QixPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2hELENBQUM7UUFFRCxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ1osS0FBSyxlQUFlO2dCQUNsQixPQUFPLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDLEtBQUssWUFBWTtnQkFDZixPQUFPLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pDLEtBQUssa0JBQWtCO2dCQUNyQixPQUFPLElBQUksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkMsS0FBSyxlQUFlO2dCQUNsQixPQUFPLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDLEtBQUssYUFBYTtnQkFDaEIsT0FBTyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsQyxLQUFLLFlBQVk7Z0JBQ2YsT0FBTyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqQyxLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoQyxLQUFLLGFBQWE7Z0JBQ2hCLE9BQU8sSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEMsS0FBSyxZQUFZO2dCQUNmLE9BQU8sSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMsS0FBSyxhQUFhO2dCQUNoQixPQUFPLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLEtBQUssZUFBZTtnQkFDbEIsT0FBTyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwQyxLQUFLLGNBQWM7Z0JBQ2pCLE9BQU8sSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkMsS0FBSyxlQUFlO2dCQUNsQixPQUFPLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDLEtBQUssYUFBYTtnQkFDaEIsT0FBTyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsQztnQkFDRSxPQUFPLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuL2lucHV0L2Jhc2UnO1xuaW1wb3J0IHsgSW5wdXRDaGVja0JveCB9IGZyb20gJy4vaW5wdXQvY2hlY2tib3gnO1xuaW1wb3J0IHsgSW5wdXRDb2xvclBpY2tlciB9IGZyb20gJy4vaW5wdXQvY29sb3JQaWNrZXInO1xuaW1wb3J0IHsgSW5wdXREcm9wZG93biB9IGZyb20gJy4vaW5wdXQvZHJvcGRvd24nO1xuaW1wb3J0IHsgSUlucHV0Q2hpbGRyZW5EeW5hbWljIH0gZnJvbSAnLi9pbnB1dC9keW5hbWljJztcbmltcG9ydCB7IElucHV0SW1hZ2VzIH0gZnJvbSAnLi9pbnB1dC9pbWFnZXMnO1xuaW1wb3J0IHsgSW5wdXRMYWJlbCB9IGZyb20gJy4vaW5wdXQvbGFiZWwnO1xuaW1wb3J0IHsgSW5wdXRMb2dvIH0gZnJvbSAnLi9pbnB1dC9sb2dvJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnLi9pbnB1dC9udW1iZXInO1xuaW1wb3J0IHsgSW5wdXRQYW5lbCB9IGZyb20gJy4vaW5wdXQvcGFuZWwnO1xuaW1wb3J0IHsgSW5wdXRSYWRpbyB9IGZyb20gJy4vaW5wdXQvcmFkaW8nO1xuaW1wb3J0IHsgSW5wdXRTY2hlbWEgfSBmcm9tICcuL2lucHV0L3NjaGVtYSc7XG5pbXBvcnQgeyBJbnB1dFRleHRhcmVhIH0gZnJvbSAnLi9pbnB1dC90ZXh0YXJlYSc7XG5pbXBvcnQgeyBJbnB1dFRleHRCb3ggfSBmcm9tICcuL2lucHV0L3RleHRib3gnO1xuaW1wb3J0IHsgSW5wdXRVcGxvYWQgfSBmcm9tICcuL2lucHV0L3VwbG9hZCc7XG5pbXBvcnQgeyBJbnB1dFd5c2lzd3lnIH0gZnJvbSAnLi9pbnB1dC93eXNpc3d5Zyc7XG5cbmV4cG9ydCB0eXBlIEZhY3RvcnlJbnB1dFR5cGUgPVxuICB8ICdJbnB1dENoZWNrQm94J1xuICB8ICdJbnB1dFJhZGlvJ1xuICB8ICdJbnB1dENvbG9yUGlja2VyJ1xuICB8ICdJbnB1dERyb3Bkb3duJ1xuICB8ICdJbnB1dEltYWdlcydcbiAgfCAnSW5wdXRMYWJlbCdcbiAgfCAnSW5wdXRMb2dvJ1xuICB8ICdJbnB1dE51bWJlcidcbiAgfCAnSW5wdXRQYW5lbCdcbiAgfCAnSW5wdXRTY2hlbWEnXG4gIHwgJ0lucHV0VGV4dGFyZWEnXG4gIHwgJ0lucHV0VGV4dEJveCdcbiAgfCAnSW5wdXRXeXNpc3d5ZydcbiAgfCAnSW5wdXRVcGxvYWQnO1xuZXhwb3J0IGNsYXNzIElucHV0RmFjdG9yeSB7XG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5wdXQoXG4gICAga2V5OiBGYWN0b3J5SW5wdXRUeXBlLFxuICAgIG9wdGlvbnM6IElJbnB1dENoaWxkcmVuRHluYW1pY1xuICApOiBJbnB1dEJhc2U8YW55PiB7XG4gICAgaWYgKG9wdGlvbnMudGVtcGxhdGVDaGlsZHJlbikge1xuICAgICAgb3B0aW9ucy5jaGlsZHJlbiA9IG9wdGlvbnMudGVtcGxhdGVDaGlsZHJlbigpO1xuICAgIH1cblxuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICdJbnB1dENoZWNrQm94JzpcbiAgICAgICAgcmV0dXJuIG5ldyBJbnB1dENoZWNrQm94KG9wdGlvbnMpO1xuICAgICAgY2FzZSAnSW5wdXRSYWRpbyc6XG4gICAgICAgIHJldHVybiBuZXcgSW5wdXRSYWRpbyhvcHRpb25zKTtcbiAgICAgIGNhc2UgJ0lucHV0Q29sb3JQaWNrZXInOlxuICAgICAgICByZXR1cm4gbmV3IElucHV0Q29sb3JQaWNrZXIob3B0aW9ucyk7XG4gICAgICBjYXNlICdJbnB1dERyb3Bkb3duJzpcbiAgICAgICAgcmV0dXJuIG5ldyBJbnB1dERyb3Bkb3duKG9wdGlvbnMpO1xuICAgICAgY2FzZSAnSW5wdXRJbWFnZXMnOlxuICAgICAgICByZXR1cm4gbmV3IElucHV0SW1hZ2VzKG9wdGlvbnMpO1xuICAgICAgY2FzZSAnSW5wdXRMYWJlbCc6XG4gICAgICAgIHJldHVybiBuZXcgSW5wdXRMYWJlbChvcHRpb25zKTtcbiAgICAgIGNhc2UgJ0lucHV0TG9nbyc6XG4gICAgICAgIHJldHVybiBuZXcgSW5wdXRMb2dvKG9wdGlvbnMpO1xuICAgICAgY2FzZSAnSW5wdXROdW1iZXInOlxuICAgICAgICByZXR1cm4gbmV3IElucHV0TnVtYmVyKG9wdGlvbnMpO1xuICAgICAgY2FzZSAnSW5wdXRQYW5lbCc6XG4gICAgICAgIHJldHVybiBuZXcgSW5wdXRQYW5lbChvcHRpb25zKTtcbiAgICAgIGNhc2UgJ0lucHV0U2NoZW1hJzpcbiAgICAgICAgcmV0dXJuIG5ldyBJbnB1dFNjaGVtYShvcHRpb25zKTtcbiAgICAgIGNhc2UgJ0lucHV0VGV4dGFyZWEnOlxuICAgICAgICByZXR1cm4gbmV3IElucHV0VGV4dGFyZWEob3B0aW9ucyk7XG4gICAgICBjYXNlICdJbnB1dFRleHRCb3gnOlxuICAgICAgICByZXR1cm4gbmV3IElucHV0VGV4dEJveChvcHRpb25zKTtcbiAgICAgIGNhc2UgJ0lucHV0V3lzaXN3eWcnOlxuICAgICAgICByZXR1cm4gbmV3IElucHV0V3lzaXN3eWcob3B0aW9ucyk7XG4gICAgICBjYXNlICdJbnB1dFVwbG9hZCc6XG4gICAgICAgIHJldHVybiBuZXcgSW5wdXRVcGxvYWQob3B0aW9ucyk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbmV3IElucHV0VGV4dEJveChvcHRpb25zKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==