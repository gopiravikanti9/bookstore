import React from 'react';

function NestedComponents() {
    return (
        <div>
            <h1>I am the parent</h1>
            <Child />
        </div>
    )
}

const Child = () => {
    return <h3>I am the child</h3>
}
export default NestedComponents;
