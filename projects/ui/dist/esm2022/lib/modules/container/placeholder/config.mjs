export const cardPlaceholder = {
    type: 'item',
    children: [
        {
            type: 'col',
            children: [
                {
                    type: 'row',
                    children: [
                        {
                            type: 'col',
                            gridSize: 8,
                            attributes: ['big'],
                            repeat: 1,
                        },
                        {
                            type: 'col',
                            gridSize: 4,
                            attributes: ['empty', 'big'],
                            repeat: 1,
                        },
                        {
                            type: 'col',
                            gridSize: 4,
                            repeat: 1,
                        },
                    ],
                    repeat: 1,
                },
            ],
            repeat: 1,
        },
        {
            type: 'col',
            gridSize: 2,
            children: [
                {
                    type: 'avatar',
                    repeat: 1,
                },
            ],
            repeat: 1,
        },
        {
            type: 'col',
            gridSize: 12,
            children: [
                {
                    type: 'row',
                    children: [
                        {
                            type: 'col',
                            gridSize: 8,
                            repeat: 1,
                        },
                        {
                            type: 'col',
                            gridSize: 4,
                            attributes: ['empty'],
                            repeat: 1,
                        },
                    ],
                    repeat: 2,
                },
            ],
            repeat: 1,
        },
        {
            type: 'row',
            children: [
                {
                    type: 'col',
                    gridSize: 12,
                    repeat: 6,
                },
            ],
            repeat: 1,
        },
    ],
    repeat: 1,
};
export const menuPlaceholder = {
    type: 'row',
    children: [
        {
            type: 'col',
            gridSize: 3,
            attributes: ['big'],
            repeat: 1,
        },
        {
            type: 'col',
            gridSize: 1,
            attributes: ['big', 'empty'],
            repeat: 1,
        },
        {
            type: 'col',
            gridSize: 4,
            attributes: ['big'],
            repeat: 1,
        },
        {
            type: 'col',
            gridSize: 1,
            attributes: ['big', 'empty'],
            repeat: 1,
        },
        {
            type: 'col',
            gridSize: 3,
            attributes: ['big'],
            repeat: 1,
        },
    ],
    repeat: 3,
};
export const morePlaceholder = {
    type: 'row',
    children: [
        {
            type: 'col',
            gridSize: 4,
            attributes: ['big', 'empty'],
            repeat: 1,
        },
        {
            type: 'col',
            gridSize: 4,
            attributes: ['big'],
            repeat: 1,
        },
        {
            type: 'col',
            gridSize: 4,
            attributes: ['big', 'empty'],
            repeat: 1,
        },
        {
            type: 'col',
            gridSize: 12,
            attributes: ['empty'],
            repeat: 1,
        },
    ],
    repeat: 3,
};
export const fileListPlaceholder = {
    type: 'container',
    attributes: ['block'],
    children: [
        {
            type: 'item',
            attributes: ['no-shadow'],
            gridSize: 3,
            repeat: 1,
            children: [
                {
                    type: 'col',
                    gridSize: 4,
                    repeat: 9,
                    children: [
                        {
                            type: 'picture',
                            repeat: 1,
                        },
                    ],
                },
            ],
        },
    ],
    repeat: 1,
};
export const cardListPlaceholder = {
    type: 'container',
    children: [
        {
            type: 'container',
            children: [cardPlaceholder],
            repeat: 3,
        },
        {
            type: 'container',
            children: [morePlaceholder],
            repeat: 3,
        },
    ],
    repeat: 1,
};
export const detailPlaceholder = {
    type: 'container',
    children: [
        {
            type: 'container',
            children: [cardPlaceholder],
            repeat: 2,
        },
    ],
    repeat: 1,
};
export const getPlaceholderConfig = (placeHolder) => {
    switch (placeHolder) {
        case 'cardList':
            return cardListPlaceholder;
        case 'detail':
            return detailPlaceholder;
        case 'fileList':
            return fileListPlaceholder;
        default:
            return cardPlaceholder;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL2NvbnRhaW5lci9wbGFjZWhvbGRlci9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUEsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFnQjtJQUMxQyxJQUFJLEVBQUUsTUFBTTtJQUNaLFFBQVEsRUFBRTtRQUNSO1lBQ0UsSUFBSSxFQUFFLEtBQUs7WUFDWCxRQUFRLEVBQUU7Z0JBQ1I7b0JBQ0UsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsUUFBUSxFQUFFO3dCQUNSOzRCQUNFLElBQUksRUFBRSxLQUFLOzRCQUNYLFFBQVEsRUFBRSxDQUFDOzRCQUNYLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQzs0QkFDbkIsTUFBTSxFQUFFLENBQUM7eUJBQ1Y7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLEtBQUs7NEJBQ1gsUUFBUSxFQUFFLENBQUM7NEJBQ1gsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQzs0QkFDNUIsTUFBTSxFQUFFLENBQUM7eUJBQ1Y7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLEtBQUs7NEJBQ1gsUUFBUSxFQUFFLENBQUM7NEJBQ1gsTUFBTSxFQUFFLENBQUM7eUJBQ1Y7cUJBQ0Y7b0JBQ0QsTUFBTSxFQUFFLENBQUM7aUJBQ1Y7YUFDRjtZQUNELE1BQU0sRUFBRSxDQUFDO1NBQ1Y7UUFDRDtZQUNFLElBQUksRUFBRSxLQUFLO1lBQ1gsUUFBUSxFQUFFLENBQUM7WUFDWCxRQUFRLEVBQUU7Z0JBQ1I7b0JBQ0UsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsTUFBTSxFQUFFLENBQUM7aUJBQ1Y7YUFDRjtZQUNELE1BQU0sRUFBRSxDQUFDO1NBQ1Y7UUFDRDtZQUNFLElBQUksRUFBRSxLQUFLO1lBQ1gsUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUU7Z0JBQ1I7b0JBQ0UsSUFBSSxFQUFFLEtBQUs7b0JBQ1gs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c291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgUGxhY2Vob2xkZXIgPSB7XG4gIHR5cGU6ICdjb250YWluZXInIHwgJ3JvdycgfCAnY29sJyB8ICdpdGVtJyB8ICdwaWN0dXJlJyB8ICdhdmF0YXInO1xuICBjaGlsZHJlbj86IFBsYWNlaG9sZGVyW107XG4gIGdyaWRTaXplPzogbnVtYmVyO1xuICBhdHRyaWJ1dGVzPzogKCdiaWcnIHwgJ2VtcHR5JyB8ICdibG9jaycgfCAnbm8tc2hhZG93JylbXTtcbiAgcmVwZWF0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgY29uc3QgY2FyZFBsYWNlaG9sZGVyOiBQbGFjZWhvbGRlciA9IHtcbiAgdHlwZTogJ2l0ZW0nLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHR5cGU6ICdjb2wnLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdyb3cnLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6ICdjb2wnLFxuICAgICAgICAgICAgICBncmlkU2l6ZTogOCxcbiAgICAgICAgICAgICAgYXR0cmlidXRlczogWydiaWcnXSxcbiAgICAgICAgICAgICAgcmVwZWF0OiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2NvbCcsXG4gICAgICAgICAgICAgIGdyaWRTaXplOiA0LFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbJ2VtcHR5JywgJ2JpZyddLFxuICAgICAgICAgICAgICByZXBlYXQ6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiAnY29sJyxcbiAgICAgICAgICAgICAgZ3JpZFNpemU6IDQsXG4gICAgICAgICAgICAgIHJlcGVhdDogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZXBlYXQ6IDEsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgcmVwZWF0OiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ2NvbCcsXG4gICAgICBncmlkU2l6ZTogMixcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnYXZhdGFyJyxcbiAgICAgICAgICByZXBlYXQ6IDEsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgcmVwZWF0OiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ2NvbCcsXG4gICAgICBncmlkU2l6ZTogMTIsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ3JvdycsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2NvbCcsXG4gICAgICAgICAgICAgIGdyaWRTaXplOiA4LFxuICAgICAgICAgICAgICByZXBlYXQ6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiAnY29sJyxcbiAgICAgICAgICAgICAgZ3JpZFNpemU6IDQsXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFsnZW1wdHknXSxcbiAgICAgICAgICAgICAgcmVwZWF0OiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlcGVhdDogMixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICByZXBlYXQ6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAncm93JyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnY29sJyxcbiAgICAgICAgICBncmlkU2l6ZTogMTIsXG4gICAgICAgICAgcmVwZWF0OiA2LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHJlcGVhdDogMSxcbiAgICB9LFxuICBdLFxuICByZXBlYXQ6IDEsXG59O1xuXG5leHBvcnQgY29uc3QgbWVudVBsYWNlaG9sZGVyOiBQbGFjZWhvbGRlciA9IHtcbiAgdHlwZTogJ3JvdycsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgdHlwZTogJ2NvbCcsXG4gICAgICBncmlkU2l6ZTogMyxcbiAgICAgIGF0dHJpYnV0ZXM6IFsnYmlnJ10sXG4gICAgICByZXBlYXQ6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnY29sJyxcbiAgICAgIGdyaWRTaXplOiAxLFxuICAgICAgYXR0cmlidXRlczogWydiaWcnLCAnZW1wdHknXSxcbiAgICAgIHJlcGVhdDogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdjb2wnLFxuICAgICAgZ3JpZFNpemU6IDQsXG4gICAgICBhdHRyaWJ1dGVzOiBbJ2JpZyddLFxuICAgICAgcmVwZWF0OiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ2NvbCcsXG4gICAgICBncmlkU2l6ZTogMSxcbiAgICAgIGF0dHJpYnV0ZXM6IFsnYmlnJywgJ2VtcHR5J10sXG4gICAgICByZXBlYXQ6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnY29sJyxcbiAgICAgIGdyaWRTaXplOiAzLFxuICAgICAgYXR0cmlidXRlczogWydiaWcnXSxcbiAgICAgIHJlcGVhdDogMSxcbiAgICB9LFxuICBdLFxuICByZXBlYXQ6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgbW9yZVBsYWNlaG9sZGVyOiBQbGFjZWhvbGRlciA9IHtcbiAgdHlwZTogJ3JvdycsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgdHlwZTogJ2NvbCcsXG4gICAgICBncmlkU2l6ZTogNCxcbiAgICAgIGF0dHJpYnV0ZXM6IFsnYmlnJywgJ2VtcHR5J10sXG4gICAgICByZXBlYXQ6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnY29sJyxcbiAgICAgIGdyaWRTaXplOiA0LFxuICAgICAgYXR0cmlidXRlczogWydiaWcnXSxcbiAgICAgIHJlcGVhdDogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdjb2wnLFxuICAgICAgZ3JpZFNpemU6IDQsXG4gICAgICBhdHRyaWJ1dGVzOiBbJ2JpZycsICdlbXB0eSddLFxuICAgICAgcmVwZWF0OiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ2NvbCcsXG4gICAgICBncmlkU2l6ZTogMTIsXG4gICAgICBhdHRyaWJ1dGVzOiBbJ2VtcHR5J10sXG4gICAgICByZXBlYXQ6IDEsXG4gICAgfSxcbiAgXSxcbiAgcmVwZWF0OiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IGZpbGVMaXN0UGxhY2Vob2xkZXI6IFBsYWNlaG9sZGVyID0ge1xuICB0eXBlOiAnY29udGFpbmVyJyxcbiAgYXR0cmlidXRlczogWydibG9jayddLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHR5cGU6ICdpdGVtJyxcbiAgICAgIGF0dHJpYnV0ZXM6IFsnbm8tc2hhZG93J10sXG4gICAgICBncmlkU2l6ZTogMyxcbiAgICAgIHJlcGVhdDogMSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnY29sJyxcbiAgICAgICAgICBncmlkU2l6ZTogNCxcbiAgICAgICAgICByZXBlYXQ6IDksXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3BpY3R1cmUnLFxuICAgICAgICAgICAgICByZXBlYXQ6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG4gIHJlcGVhdDogMSxcbn07XG5leHBvcnQgY29uc3QgY2FyZExpc3RQbGFjZWhvbGRlcjogUGxhY2Vob2xkZXIgPSB7XG4gIHR5cGU6ICdjb250YWluZXInLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHR5cGU6ICdjb250YWluZXInLFxuICAgICAgY2hpbGRyZW46IFtjYXJkUGxhY2Vob2xkZXJdLFxuICAgICAgcmVwZWF0OiAzLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ2NvbnRhaW5lcicsXG4gICAgICBjaGlsZHJlbjogW21vcmVQbGFjZWhvbGRlcl0sXG4gICAgICByZXBlYXQ6IDMsXG4gICAgfSxcbiAgXSxcbiAgcmVwZWF0OiAxLFxufTtcblxuZXhwb3J0IGNvbnN0IGRldGFpbFBsYWNlaG9sZGVyOiBQbGFjZWhvbGRlciA9IHtcbiAgdHlwZTogJ2NvbnRhaW5lcicsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgdHlwZTogJ2NvbnRhaW5lcicsXG4gICAgICBjaGlsZHJlbjogW2NhcmRQbGFjZWhvbGRlcl0sXG4gICAgICByZXBlYXQ6IDIsXG4gICAgfSxcbiAgXSxcbiAgcmVwZWF0OiAxLFxufTtcbmV4cG9ydCB0eXBlIFBsYWNlaG9sZGVyQ29uZmlnID0gJ2RlZmF1bHQnIHwgJ2NhcmRMaXN0JyB8ICdkZXRhaWwnIHwgJ2ZpbGVMaXN0JztcblxuZXhwb3J0IGNvbnN0IGdldFBsYWNlaG9sZGVyQ29uZmlnID0gKFxuICBwbGFjZUhvbGRlcjogUGxhY2Vob2xkZXJDb25maWdcbik6IFBsYWNlaG9sZGVyID0+IHtcbiAgc3dpdGNoIChwbGFjZUhvbGRlcikge1xuICAgIGNhc2UgJ2NhcmRMaXN0JzpcbiAgICAgIHJldHVybiBjYXJkTGlzdFBsYWNlaG9sZGVyO1xuICAgIGNhc2UgJ2RldGFpbCc6XG4gICAgICByZXR1cm4gZGV0YWlsUGxhY2Vob2xkZXI7XG4gICAgY2FzZSAnZmlsZUxpc3QnOlxuICAgICAgcmV0dXJuIGZpbGVMaXN0UGxhY2Vob2xkZXI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBjYXJkUGxhY2Vob2xkZXI7XG4gIH1cbn07XG4iXX0=