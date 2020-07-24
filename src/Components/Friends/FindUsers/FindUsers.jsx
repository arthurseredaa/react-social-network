import React from "react";
import { Preloader } from "../../Preloader/Preloader";
import { Pagination } from "./Pagination/Pagination";
import { FindUsersHeader } from "./FindUsersHeader/FindUsersHeader";

export const FindUsers = React.memo((props) => {
  return (
    <div className="FindUsers">
      <FindUsersHeader totalUsersCount={props.totalUsersCount} />
      {props.isLoading ? <Preloader /> : <div>{props.usersPerPage}</div>}
      <Pagination
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
    </div>
  );
});

// export class FindUsers extends React.PureComponent {
//   shouldComponentUpdate(nextProps, nextState) {
//     return (
//       shallowEqual(nextProps, this.props) || shallowEqual(nextState, this.state)
//     );
//   }
//   render() {
//     return (
//       <div className="FindUsers">
//         <FindUsersHeader />
//         {this.props.isLoading ? (
//           <Preloader />
//         ) : (
//           <div>{this.props.usersPerPage}</div>
//         )}
//         <Pagination
//           totalUsersCount={this.props.totalUsersCount}
//           pageSize={this.props.pageSize}
//           currentPage={this.props.currentPage}
//           onPageChanged={this.props.onPageChanged}
//         />
//       </div>
//     );
//   }
// }
