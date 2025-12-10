export const cardPlaceholder = {
    type: "item",
    children: [
        {
            type: "col",
            children: [
                {
                    type: "row",
                    children: [
                        {
                            type: "col",
                            gridSize: 8,
                            attributes: ["big"],
                            repeat: 1,
                        },
                        {
                            type: "col",
                            gridSize: 4,
                            attributes: ["empty", "big"],
                            repeat: 1,
                        },
                        {
                            type: "col",
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
            type: "col",
            gridSize: 2,
            children: [
                {
                    type: "avatar",
                    repeat: 1,
                },
            ],
            repeat: 1,
        },
        {
            type: "col",
            gridSize: 12,
            children: [
                {
                    type: "row",
                    children: [
                        {
                            type: "col",
                            gridSize: 8,
                            repeat: 1,
                        },
                        {
                            type: "col",
                            gridSize: 4,
                            attributes: ["empty"],
                            repeat: 1,
                        },
                    ],
                    repeat: 2,
                },
            ],
            repeat: 1,
        },
        {
            type: "row",
            children: [
                {
                    type: "col",
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
    type: "row",
    children: [
        {
            type: "col",
            gridSize: 3,
            attributes: ["big"],
            repeat: 1,
        },
        {
            type: "col",
            gridSize: 1,
            attributes: ["big", "empty"],
            repeat: 1,
        },
        {
            type: "col",
            gridSize: 4,
            attributes: ["big"],
            repeat: 1,
        },
        {
            type: "col",
            gridSize: 1,
            attributes: ["big", "empty"],
            repeat: 1,
        },
        {
            type: "col",
            gridSize: 3,
            attributes: ["big"],
            repeat: 1,
        },
    ],
    repeat: 3,
};
export const morePlaceholder = {
    type: "row",
    children: [
        {
            type: "col",
            gridSize: 4,
            attributes: ["big", "empty"],
            repeat: 1,
        },
        {
            type: "col",
            gridSize: 4,
            attributes: ["big"],
            repeat: 1,
        },
        {
            type: "col",
            gridSize: 4,
            attributes: ["big", "empty"],
            repeat: 1,
        },
        {
            type: "col",
            gridSize: 12,
            attributes: ["empty"],
            repeat: 1,
        },
    ],
    repeat: 3,
};
export const fileListPlaceholder = {
    type: "container",
    attributes: ["block"],
    children: [
        {
            type: "item",
            attributes: ["no-shadow"],
            gridSize: 3,
            repeat: 1,
            children: [
                {
                    type: "col",
                    gridSize: 4,
                    repeat: 9,
                    children: [
                        {
                            type: "picture",
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
    type: "container",
    children: [
        {
            type: "container",
            children: [cardPlaceholder],
            repeat: 3,
        },
        {
            type: "container",
            children: [morePlaceholder],
            repeat: 3,
        },
    ],
    repeat: 1,
};
export const detailPlaceholder = {
    type: "container",
    children: [
        {
            type: "container",
            children: [cardPlaceholder],
            repeat: 2,
        },
    ],
    repeat: 1,
};
export const getPlaceholderConfig = (placeHolder) => {
    switch (placeHolder) {
        case "cardList":
            return cardListPlaceholder;
        case "detail":
            return detailPlaceholder;
        case "fileList":
            return fileListPlaceholder;
        default:
            return cardPlaceholder;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL2NvbnRhaW5lci9wbGFjZWhvbGRlci9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUEsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFnQjtJQUMxQyxJQUFJLEVBQUUsTUFBTTtJQUNaLFFBQVEsRUFBRTtRQUNSO1lBQ0UsSUFBSSxFQUFFLEtBQUs7WUFDWCxRQUFRLEVBQUU7Z0JBQ1I7b0JBQ0UsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsUUFBUSxFQUFFO3dCQUNSOzRCQUNFLElBQUksRUFBRSxLQUFLOzRCQUNYLFFBQVEsRUFBRSxDQUFDOzRCQUNYLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQzs0QkFDbkIsTUFBTSxFQUFFLENBQUM7eUJBQ1Y7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLEtBQUs7NEJBQ1gsUUFBUSxFQUFFLENBQUM7NEJBQ1gsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQzs0QkFDNUIsTUFBTSxFQUFFLENBQUM7eUJBQ1Y7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLEtBQUs7NEJBQ1gsUUFBUSxFQUFFLENBQUM7NEJBQ1gsTUFBTSxFQUFFLENBQUM7eUJBQ1Y7cUJBQ0Y7b0JBQ0QsTUFBTSxFQUFFLENBQUM7aUJBQ1Y7YUFDRjtZQUNELE1BQU0sRUFBRSxDQUFDO1NBQ1Y7UUFDRDtZQUNFLElBQUksRUFBRSxLQUFLO1lBQ1gsUUFBUSxFQUFFLENBQUM7WUFDWCxRQUFRLEVBQUU7Z0JBQ1I7b0JBQ0UsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsTUFBTSxFQUFFLENBQUM7aUJBQ1Y7YUFDRjtZQUNELE1BQU0sRUFBRSxDQUFDO1NBQ1Y7UUFDRDtZQUNFLElBQUksRUFBRSxLQUFLO1lBQ1gsUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUU7Z0JBQ1I7b0JBQ0UsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsUUFBUSxFQUFFO3dCQUNSOzRCQUNFLElBQUksRUFBRSxLQUFLOzRCQUNYLFFBQVEsRUFBRSxDQUFDOzRCQUNYLE1BQU0sRUFBRSxDQUFDO3lCQUNWO3dCQUNEOzRCQUNFLElBQUksRUFBRSxLQUFLOzRCQUNYLFFBQVEsRUFBRSxDQUFDOzRCQUNYLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQzs0QkFDckIsTUFBTSxFQUFFLENBQUM7eUJBQ1Y7cUJBQ0Y7b0JBQ0QsTUFBTSxFQUFFLENBQUM7aUJBQ1Y7YUFDRjtZQUNELE1BQU0sRUFBRSxDQUFDO1NBQ1Y7UUFDRDtZQUNFLElBQUksRUFBRSxLQUFLO1lBQ1gsUUFBUSxFQUFFO2dCQUNSO29CQUNFLElBQUksRUFBRSxLQUFLO29CQUNYLFFBQVEsRUFBRSxFQUFFO29CQUNaLE1BQU0sRUFBRSxDQUFDO2lCQUNWO2FBQ0Y7WUFDRCxNQUFNLEVBQUUsQ0FBQztTQUNWO0tBQ0Y7SUFDRCxNQUFNLEVBQUUsQ0FBQztDQUNWLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxlQUFlLEdBQWdCO0lBQzFDLElBQUksRUFBRSxLQUFLO0lBQ1gsUUFBUSxFQUFFO1FBQ1I7WUFDRSxJQUFJLEVBQUUsS0FBSztZQUNYLFFBQVEsRUFBRSxDQUFDO1lBQ1gsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ25CLE1BQU0sRUFBRSxDQUFDO1NBQ1Y7UUFDRDtZQUNFLElBQUksRUFBRSxLQUFLO1lBQ1gsUUFBUSxFQUFFLENBQUM7WUFDWCxVQUFVLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO1lBQzVCLE1BQU0sRUFBRSxDQUFDO1NBQ1Y7UUFDRDtZQUNFLElBQUksRUFBRSxLQUFLO1lBQ1gsUUFBUSxFQUFFLENBQUM7WUFDWCxVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDbkIsTUFBTSxFQUFFLENBQUM7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEtBQUs7WUFDWCxRQUFRLEVBQUUsQ0FBQztZQUNYLFVBQVUsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7WUFDNUIsTUFBTSxFQUFFLENBQUM7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEtBQUs7WUFDWCxRQUFRLEVBQUUsQ0FBQztZQUNYLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNuQixNQUFNLEVBQUUsQ0FBQztTQUNWO0tBQ0Y7SUFDRCxNQUFNLEVBQUUsQ0FBQztDQUNWLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxlQUFlLEdBQWdCO0lBQzFDLElBQUksRUFBRSxLQUFLO0lBQ1gsUUFBUSxFQUFFO1FBQ1I7WUFDRSxJQUFJLEVBQUUsS0FBSztZQUNYLFFBQVEsRUFBRSxDQUFDO1lBQ1gsVUFBVSxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztZQUM1QixNQUFNLEVBQUUsQ0FBQztTQUNWO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsS0FBSztZQUNYLFFBQVEsRUFBRSxDQUFDO1lBQ1gsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ25CLE1BQU0sRUFBRSxDQUFDO1NBQ1Y7UUFDRDtZQUNFLElBQUksRUFBRSxLQUFLO1lBQ1gsUUFBUSxFQUFFLENBQUM7WUFDWCxVQUFVLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO1lBQzVCLE1BQU0sRUFBRSxDQUFDO1NBQ1Y7UUFDRDtZQUNFLElBQUksRUFBRSxLQUFLO1lBQ1gsUUFBUSxFQUFFLEVBQUU7WUFDWixVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDckIsTUFBTSxFQUFFLENBQUM7U0FDVjtLQUNGO0lBQ0QsTUFBTSxFQUFFLENBQUM7Q0FDVixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQWdCO0lBQzlDLElBQUksRUFBRSxXQUFXO0lBQ2pCLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQztJQUNyQixRQUFRLEVBQUU7UUFDUjtZQUNFLElBQUksRUFBRSxNQUFNO1lBQ1osVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ3pCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsTUFBTSxFQUFFLENBQUM7WUFDVCxRQUFRLEVBQUU7Z0JBQ1I7b0JBQ0UsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsUUFBUSxFQUFFLENBQUM7b0JBQ1gsTUFBTSxFQUFFLENBQUM7b0JBQ1QsUUFBUSxFQUFFO3dCQUNSOzRCQUNFLElBQUksRUFBRSxTQUFTOzRCQUNmLE1BQU0sRUFBRSxDQUFDO3lCQUNWO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGO0lBQ0QsTUFBTSxFQUFFLENBQUM7Q0FDVixDQUFDO0FBQ0YsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQWdCO0lBQzlDLElBQUksRUFBRSxXQUFXO0lBQ2pCLFFBQVEsRUFBRTtRQUNSO1lBQ0UsSUFBSSxFQUFFLFdBQVc7WUFDakIsUUFBUSxFQUFFLENBQUMsZUFBZSxDQUFDO1lBQzNCLE1BQU0sRUFBRSxDQUFDO1NBQ1Y7UUFDRDtZQUNFLElBQUksRUFBRSxXQUFXO1lBQ2pCLFFBQVEsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUMzQixNQUFNLEVBQUUsQ0FBQztTQUNWO0tBQ0Y7SUFDRCxNQUFNLEVBQUUsQ0FBQztDQUNWLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBZ0I7SUFDNUMsSUFBSSxFQUFFLFdBQVc7SUFDakIsUUFBUSxFQUFFO1FBQ1I7WUFDRSxJQUFJLEVBQUUsV0FBVztZQUNqQixRQUFRLEVBQUUsQ0FBQyxlQUFlLENBQUM7WUFDM0IsTUFBTSxFQUFFLENBQUM7U0FDVjtLQUNGO0lBQ0QsTUFBTSxFQUFFLENBQUM7Q0FDVixDQUFDO0FBR0YsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsQ0FDbEMsV0FBOEIsRUFDakIsRUFBRTtJQUNmLFFBQVEsV0FBVyxFQUFFLENBQUM7UUFDcEIsS0FBSyxVQUFVO1lBQ2IsT0FBTyxtQkFBbUIsQ0FBQztRQUM3QixLQUFLLFFBQVE7WUFDWCxPQUFPLGlCQUFpQixDQUFDO1FBQzNCLEtBQUssVUFBVTtZQUNiLE9BQU8sbUJBQW1CLENBQUM7UUFDN0I7WUFDRSxPQUFPLGVBQWUsQ0FBQztJQUMzQixDQUFDO0FBQ0gsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgUGxhY2Vob2xkZXIgPSB7XG4gIHR5cGU6IFwiY29udGFpbmVyXCIgfCBcInJvd1wiIHwgXCJjb2xcIiB8IFwiaXRlbVwiIHwgXCJwaWN0dXJlXCIgfCBcImF2YXRhclwiO1xuICBjaGlsZHJlbj86IFBsYWNlaG9sZGVyW107XG4gIGdyaWRTaXplPzogbnVtYmVyO1xuICBhdHRyaWJ1dGVzPzogKFwiYmlnXCIgfCBcImVtcHR5XCIgfCBcImJsb2NrXCIgfCBcIm5vLXNoYWRvd1wiKVtdO1xuICByZXBlYXQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBjb25zdCBjYXJkUGxhY2Vob2xkZXI6IFBsYWNlaG9sZGVyID0ge1xuICB0eXBlOiBcIml0ZW1cIixcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICB0eXBlOiBcImNvbFwiLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwicm93XCIsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJjb2xcIixcbiAgICAgICAgICAgICAgZ3JpZFNpemU6IDgsXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFtcImJpZ1wiXSxcbiAgICAgICAgICAgICAgcmVwZWF0OiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJjb2xcIixcbiAgICAgICAgICAgICAgZ3JpZFNpemU6IDQsXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFtcImVtcHR5XCIsIFwiYmlnXCJdLFxuICAgICAgICAgICAgICByZXBlYXQ6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcImNvbFwiLFxuICAgICAgICAgICAgICBncmlkU2l6ZTogNCxcbiAgICAgICAgICAgICAgcmVwZWF0OiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlcGVhdDogMSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICByZXBlYXQ6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiBcImNvbFwiLFxuICAgICAgZ3JpZFNpemU6IDIsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJhdmF0YXJcIixcbiAgICAgICAgICByZXBlYXQ6IDEsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgcmVwZWF0OiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogXCJjb2xcIixcbiAgICAgIGdyaWRTaXplOiAxMixcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcInJvd1wiLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiY29sXCIsXG4gICAgICAgICAgICAgIGdyaWRTaXplOiA4LFxuICAgICAgICAgICAgICByZXBlYXQ6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcImNvbFwiLFxuICAgICAgICAgICAgICBncmlkU2l6ZTogNCxcbiAgICAgICAgICAgICAgYXR0cmlidXRlczogW1wiZW1wdHlcIl0sXG4gICAgICAgICAgICAgIHJlcGVhdDogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZXBlYXQ6IDIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgcmVwZWF0OiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogXCJyb3dcIixcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcImNvbFwiLFxuICAgICAgICAgIGdyaWRTaXplOiAxMixcbiAgICAgICAgICByZXBlYXQ6IDYsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgcmVwZWF0OiAxLFxuICAgIH0sXG4gIF0sXG4gIHJlcGVhdDogMSxcbn07XG5cbmV4cG9ydCBjb25zdCBtZW51UGxhY2Vob2xkZXI6IFBsYWNlaG9sZGVyID0ge1xuICB0eXBlOiBcInJvd1wiLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHR5cGU6IFwiY29sXCIsXG4gICAgICBncmlkU2l6ZTogMyxcbiAgICAgIGF0dHJpYnV0ZXM6IFtcImJpZ1wiXSxcbiAgICAgIHJlcGVhdDogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6IFwiY29sXCIsXG4gICAgICBncmlkU2l6ZTogMSxcbiAgICAgIGF0dHJpYnV0ZXM6IFtcImJpZ1wiLCBcImVtcHR5XCJdLFxuICAgICAgcmVwZWF0OiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogXCJjb2xcIixcbiAgICAgIGdyaWRTaXplOiA0LFxuICAgICAgYXR0cmlidXRlczogW1wiYmlnXCJdLFxuICAgICAgcmVwZWF0OiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogXCJjb2xcIixcbiAgICAgIGdyaWRTaXplOiAxLFxuICAgICAgYXR0cmlidXRlczogW1wiYmlnXCIsIFwiZW1wdHlcIl0sXG4gICAgICByZXBlYXQ6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiBcImNvbFwiLFxuICAgICAgZ3JpZFNpemU6IDMsXG4gICAgICBhdHRyaWJ1dGVzOiBbXCJiaWdcIl0sXG4gICAgICByZXBlYXQ6IDEsXG4gICAgfSxcbiAgXSxcbiAgcmVwZWF0OiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IG1vcmVQbGFjZWhvbGRlcjogUGxhY2Vob2xkZXIgPSB7XG4gIHR5cGU6IFwicm93XCIsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgdHlwZTogXCJjb2xcIixcbiAgICAgIGdyaWRTaXplOiA0LFxuICAgICAgYXR0cmlidXRlczogW1wiYmlnXCIsIFwiZW1wdHlcIl0sXG4gICAgICByZXBlYXQ6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiBcImNvbFwiLFxuICAgICAgZ3JpZFNpemU6IDQsXG4gICAgICBhdHRyaWJ1dGVzOiBbXCJiaWdcIl0sXG4gICAgICByZXBlYXQ6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiBcImNvbFwiLFxuICAgICAgZ3JpZFNpemU6IDQsXG4gICAgICBhdHRyaWJ1dGVzOiBbXCJiaWdcIiwgXCJlbXB0eVwiXSxcbiAgICAgIHJlcGVhdDogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6IFwiY29sXCIsXG4gICAgICBncmlkU2l6ZTogMTIsXG4gICAgICBhdHRyaWJ1dGVzOiBbXCJlbXB0eVwiXSxcbiAgICAgIHJlcGVhdDogMSxcbiAgICB9LFxuICBdLFxuICByZXBlYXQ6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgZmlsZUxpc3RQbGFjZWhvbGRlcjogUGxhY2Vob2xkZXIgPSB7XG4gIHR5cGU6IFwiY29udGFpbmVyXCIsXG4gIGF0dHJpYnV0ZXM6IFtcImJsb2NrXCJdLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHR5cGU6IFwiaXRlbVwiLFxuICAgICAgYXR0cmlidXRlczogW1wibm8tc2hhZG93XCJdLFxuICAgICAgZ3JpZFNpemU6IDMsXG4gICAgICByZXBlYXQ6IDEsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJjb2xcIixcbiAgICAgICAgICBncmlkU2l6ZTogNCxcbiAgICAgICAgICByZXBlYXQ6IDksXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJwaWN0dXJlXCIsXG4gICAgICAgICAgICAgIHJlcGVhdDogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbiAgcmVwZWF0OiAxLFxufTtcbmV4cG9ydCBjb25zdCBjYXJkTGlzdFBsYWNlaG9sZGVyOiBQbGFjZWhvbGRlciA9IHtcbiAgdHlwZTogXCJjb250YWluZXJcIixcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICB0eXBlOiBcImNvbnRhaW5lclwiLFxuICAgICAgY2hpbGRyZW46IFtjYXJkUGxhY2Vob2xkZXJdLFxuICAgICAgcmVwZWF0OiAzLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogXCJjb250YWluZXJcIixcbiAgICAgIGNoaWxkcmVuOiBbbW9yZVBsYWNlaG9sZGVyXSxcbiAgICAgIHJlcGVhdDogMyxcbiAgICB9LFxuICBdLFxuICByZXBlYXQ6IDEsXG59O1xuXG5leHBvcnQgY29uc3QgZGV0YWlsUGxhY2Vob2xkZXI6IFBsYWNlaG9sZGVyID0ge1xuICB0eXBlOiBcImNvbnRhaW5lclwiLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHR5cGU6IFwiY29udGFpbmVyXCIsXG4gICAgICBjaGlsZHJlbjogW2NhcmRQbGFjZWhvbGRlcl0sXG4gICAgICByZXBlYXQ6IDIsXG4gICAgfSxcbiAgXSxcbiAgcmVwZWF0OiAxLFxufTtcbmV4cG9ydCB0eXBlIFBsYWNlaG9sZGVyQ29uZmlnID0gXCJkZWZhdWx0XCIgfCBcImNhcmRMaXN0XCIgfCBcImRldGFpbFwiIHwgXCJmaWxlTGlzdFwiO1xuXG5leHBvcnQgY29uc3QgZ2V0UGxhY2Vob2xkZXJDb25maWcgPSAoXG4gIHBsYWNlSG9sZGVyOiBQbGFjZWhvbGRlckNvbmZpZ1xuKTogUGxhY2Vob2xkZXIgPT4ge1xuICBzd2l0Y2ggKHBsYWNlSG9sZGVyKSB7XG4gICAgY2FzZSBcImNhcmRMaXN0XCI6XG4gICAgICByZXR1cm4gY2FyZExpc3RQbGFjZWhvbGRlcjtcbiAgICBjYXNlIFwiZGV0YWlsXCI6XG4gICAgICByZXR1cm4gZGV0YWlsUGxhY2Vob2xkZXI7XG4gICAgY2FzZSBcImZpbGVMaXN0XCI6XG4gICAgICByZXR1cm4gZmlsZUxpc3RQbGFjZWhvbGRlcjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGNhcmRQbGFjZWhvbGRlcjtcbiAgfVxufTtcbiJdfQ==