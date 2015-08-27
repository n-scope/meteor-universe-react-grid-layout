import {deepEqual} from '{universe:utilities-react}';
export default {
    shouldComponentUpdate: function(nextProps, nextState) {
        return !deepEqual(this.props, nextProps) ||
            !deepEqual(this.state, nextState);
    }
};