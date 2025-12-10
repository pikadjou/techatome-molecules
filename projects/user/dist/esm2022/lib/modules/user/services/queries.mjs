import { Apollo_gql } from "@ta/server";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy91c2VyL3NlcnZpY2VzL3F1ZXJpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBc0MsTUFBTSxZQUFZLENBQUM7QUFFNUUsTUFBTSxVQUFVLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBbUI7SUFDakQsT0FBTztRQUNMLEtBQUssRUFBRSxVQUFVLENBQUE7OztjQUdQLEtBQUs7OztPQUdaO1FBQ0gsU0FBUyxFQUFFLEVBQUU7S0FDZCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb19ncWwsIEdyYXBoUXVlcnlJbnB1dCwgR3JhcGhRdWVyeVBheWxvYWQgfSBmcm9tIFwiQHRhL3NlcnZlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlckluZm8oeyBwcm9wcyB9OiBHcmFwaFF1ZXJ5SW5wdXQpOiBHcmFwaFF1ZXJ5UGF5bG9hZCB7XG4gIHJldHVybiB7XG4gICAgcXVlcnk6IEFwb2xsb19ncWxgXG4gICAgICAgIHF1ZXJ5IFVzZXJJbmZvIHtcbiAgICAgICAgICB1c2VySW5mbyB7XG4gICAgICAgICAgICAke3Byb3BzfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICB2YXJpYWJsZXM6IHt9LFxuICB9O1xufVxuIl19