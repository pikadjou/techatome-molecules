import { Apollo_gql } from '@ta/server';
export function userInfo({ props }) {
    return {
        query: Apollo_gql `
        query UserInfo {
          userInfo {
            ${props}
          }
        }
      `,
        variables: {},
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy91c2VyL3NlcnZpY2VzL3F1ZXJpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBc0MsTUFBTSxZQUFZLENBQUM7QUFFNUUsTUFBTSxVQUFVLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBbUI7SUFDakQsT0FBTztRQUNMLEtBQUssRUFBRSxVQUFVLENBQUE7OztjQUdQLEtBQUs7OztPQUdaO1FBQ0gsU0FBUyxFQUFFLEVBQUU7S0FDZCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb19ncWwsIEdyYXBoUXVlcnlJbnB1dCwgR3JhcGhRdWVyeVBheWxvYWQgfSBmcm9tICdAdGEvc2VydmVyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VySW5mbyh7IHByb3BzIH06IEdyYXBoUXVlcnlJbnB1dCk6IEdyYXBoUXVlcnlQYXlsb2FkIHtcclxuICByZXR1cm4ge1xyXG4gICAgcXVlcnk6IEFwb2xsb19ncWxgXHJcbiAgICAgICAgcXVlcnkgVXNlckluZm8ge1xyXG4gICAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgICAke3Byb3BzfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYCxcclxuICAgIHZhcmlhYmxlczoge30sXHJcbiAgfTtcclxufVxyXG4iXX0=