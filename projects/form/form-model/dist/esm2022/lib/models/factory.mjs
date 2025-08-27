import { InputCheckBox } from './input/checkbox';
import { InputColorPicker } from './input/colorPicker';
import { InputDropdown } from './input/dropdown';
import { InputImages } from './input/images';
import { InputLabel } from './input/label';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbW9kZWxzL2ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFnQmpELE1BQU0sT0FBTyxZQUFZO0lBQ2hCLE1BQU0sQ0FBQyxRQUFRLENBQ3BCLEdBQXFCLEVBQ3JCLE9BQThCO1FBRTlCLElBQUksT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDN0IsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNoRCxDQUFDO1FBRUQsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNaLEtBQUssZUFBZTtnQkFDbEIsT0FBTyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwQyxLQUFLLFlBQVk7Z0JBQ2YsT0FBTyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqQyxLQUFLLGtCQUFrQjtnQkFDckIsT0FBTyxJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZDLEtBQUssZUFBZTtnQkFDbEIsT0FBTyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwQyxLQUFLLGFBQWE7Z0JBQ2hCLE9BQU8sSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEMsS0FBSyxZQUFZO2dCQUNmLE9BQU8sSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMsS0FBSyxhQUFhO2dCQUNoQixPQUFPLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLEtBQUssWUFBWTtnQkFDZixPQUFPLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pDLEtBQUssYUFBYTtnQkFDaEIsT0FBTyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsQyxLQUFLLGVBQWU7Z0JBQ2xCLE9BQU8sSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEMsS0FBSyxjQUFjO2dCQUNqQixPQUFPLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25DLEtBQUssZUFBZTtnQkFDbEIsT0FBTyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwQyxLQUFLLGFBQWE7Z0JBQ2hCLE9BQU8sSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEM7Z0JBQ0UsT0FBTyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxDQUFDO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnLi9pbnB1dC9iYXNlJztcbmltcG9ydCB7IElucHV0Q2hlY2tCb3ggfSBmcm9tICcuL2lucHV0L2NoZWNrYm94JztcbmltcG9ydCB7IElucHV0Q29sb3JQaWNrZXIgfSBmcm9tICcuL2lucHV0L2NvbG9yUGlja2VyJztcbmltcG9ydCB7IElucHV0RHJvcGRvd24gfSBmcm9tICcuL2lucHV0L2Ryb3Bkb3duJztcbmltcG9ydCB7IElJbnB1dENoaWxkcmVuRHluYW1pYyB9IGZyb20gJy4vaW5wdXQvZHluYW1pYyc7XG5pbXBvcnQgeyBJbnB1dEltYWdlcyB9IGZyb20gJy4vaW5wdXQvaW1hZ2VzJztcbmltcG9ydCB7IElucHV0TGFiZWwgfSBmcm9tICcuL2lucHV0L2xhYmVsJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnLi9pbnB1dC9udW1iZXInO1xuaW1wb3J0IHsgSW5wdXRQYW5lbCB9IGZyb20gJy4vaW5wdXQvcGFuZWwnO1xuaW1wb3J0IHsgSW5wdXRSYWRpbyB9IGZyb20gJy4vaW5wdXQvcmFkaW8nO1xuaW1wb3J0IHsgSW5wdXRTY2hlbWEgfSBmcm9tICcuL2lucHV0L3NjaGVtYSc7XG5pbXBvcnQgeyBJbnB1dFRleHRhcmVhIH0gZnJvbSAnLi9pbnB1dC90ZXh0YXJlYSc7XG5pbXBvcnQgeyBJbnB1dFRleHRCb3ggfSBmcm9tICcuL2lucHV0L3RleHRib3gnO1xuaW1wb3J0IHsgSW5wdXRVcGxvYWQgfSBmcm9tICcuL2lucHV0L3VwbG9hZCc7XG5pbXBvcnQgeyBJbnB1dFd5c2lzd3lnIH0gZnJvbSAnLi9pbnB1dC93eXNpc3d5Zyc7XG5cbmV4cG9ydCB0eXBlIEZhY3RvcnlJbnB1dFR5cGUgPVxuICB8ICdJbnB1dENoZWNrQm94J1xuICB8ICdJbnB1dFJhZGlvJ1xuICB8ICdJbnB1dENvbG9yUGlja2VyJ1xuICB8ICdJbnB1dERyb3Bkb3duJ1xuICB8ICdJbnB1dEltYWdlcydcbiAgfCAnSW5wdXRMYWJlbCdcbiAgfCAnSW5wdXROdW1iZXInXG4gIHwgJ0lucHV0UGFuZWwnXG4gIHwgJ0lucHV0U2NoZW1hJ1xuICB8ICdJbnB1dFRleHRhcmVhJ1xuICB8ICdJbnB1dFRleHRCb3gnXG4gIHwgJ0lucHV0V3lzaXN3eWcnXG4gIHwgJ0lucHV0VXBsb2FkJztcbmV4cG9ydCBjbGFzcyBJbnB1dEZhY3Rvcnkge1xuICBwdWJsaWMgc3RhdGljIGdldElucHV0KFxuICAgIGtleTogRmFjdG9yeUlucHV0VHlwZSxcbiAgICBvcHRpb25zOiBJSW5wdXRDaGlsZHJlbkR5bmFtaWNcbiAgKTogSW5wdXRCYXNlPGFueT4ge1xuICAgIGlmIChvcHRpb25zLnRlbXBsYXRlQ2hpbGRyZW4pIHtcbiAgICAgIG9wdGlvbnMuY2hpbGRyZW4gPSBvcHRpb25zLnRlbXBsYXRlQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgY2FzZSAnSW5wdXRDaGVja0JveCc6XG4gICAgICAgIHJldHVybiBuZXcgSW5wdXRDaGVja0JveChvcHRpb25zKTtcbiAgICAgIGNhc2UgJ0lucHV0UmFkaW8nOlxuICAgICAgICByZXR1cm4gbmV3IElucHV0UmFkaW8ob3B0aW9ucyk7XG4gICAgICBjYXNlICdJbnB1dENvbG9yUGlja2VyJzpcbiAgICAgICAgcmV0dXJuIG5ldyBJbnB1dENvbG9yUGlja2VyKG9wdGlvbnMpO1xuICAgICAgY2FzZSAnSW5wdXREcm9wZG93bic6XG4gICAgICAgIHJldHVybiBuZXcgSW5wdXREcm9wZG93bihvcHRpb25zKTtcbiAgICAgIGNhc2UgJ0lucHV0SW1hZ2VzJzpcbiAgICAgICAgcmV0dXJuIG5ldyBJbnB1dEltYWdlcyhvcHRpb25zKTtcbiAgICAgIGNhc2UgJ0lucHV0TGFiZWwnOlxuICAgICAgICByZXR1cm4gbmV3IElucHV0TGFiZWwob3B0aW9ucyk7XG4gICAgICBjYXNlICdJbnB1dE51bWJlcic6XG4gICAgICAgIHJldHVybiBuZXcgSW5wdXROdW1iZXIob3B0aW9ucyk7XG4gICAgICBjYXNlICdJbnB1dFBhbmVsJzpcbiAgICAgICAgcmV0dXJuIG5ldyBJbnB1dFBhbmVsKG9wdGlvbnMpO1xuICAgICAgY2FzZSAnSW5wdXRTY2hlbWEnOlxuICAgICAgICByZXR1cm4gbmV3IElucHV0U2NoZW1hKG9wdGlvbnMpO1xuICAgICAgY2FzZSAnSW5wdXRUZXh0YXJlYSc6XG4gICAgICAgIHJldHVybiBuZXcgSW5wdXRUZXh0YXJlYShvcHRpb25zKTtcbiAgICAgIGNhc2UgJ0lucHV0VGV4dEJveCc6XG4gICAgICAgIHJldHVybiBuZXcgSW5wdXRUZXh0Qm94KG9wdGlvbnMpO1xuICAgICAgY2FzZSAnSW5wdXRXeXNpc3d5Zyc6XG4gICAgICAgIHJldHVybiBuZXcgSW5wdXRXeXNpc3d5ZyhvcHRpb25zKTtcbiAgICAgIGNhc2UgJ0lucHV0VXBsb2FkJzpcbiAgICAgICAgcmV0dXJuIG5ldyBJbnB1dFVwbG9hZChvcHRpb25zKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBuZXcgSW5wdXRUZXh0Qm94KG9wdGlvbnMpO1xuICAgIH1cbiAgfVxufVxuIl19