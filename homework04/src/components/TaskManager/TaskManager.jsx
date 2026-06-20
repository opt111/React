import React, { Suspense } from 'react';
import TaskBoard from './TaskBoard';

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return <h2>Щось пішло не так. Перезавантажте сторінку.</h2>;
    return this.props.children;
  }
}

const TaskManager = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<h2>Завантаження задач...</h2>}>
        <TaskBoard />
      </Suspense>
    </ErrorBoundary>
  );
};

export default TaskManager;