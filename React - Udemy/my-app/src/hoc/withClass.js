import React from 'react';

// const withClass = props => (
//     <div className = {props.classes}>
//         {props.children}
//     </div>
// );

const withClass = (WrappedComponent,ClassName) =>{
    return props => (
        <div className={ClassName}>
            <WrappedComponent {...props} />
        </div>
    );
}

export default withClass;