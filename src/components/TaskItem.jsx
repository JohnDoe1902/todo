import { useState } from "react";

// Стили
import styles from "./TaskItem.module.css";

// импорт иконок
import { CheckIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

export const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {
	const [isChecked, setIsChecked] = useState(task.checked);

	const handleCheckboxChange = (e) => {
		setIsChecked(!isChecked);
		toggleTask(task.id);
	};
	return (
		<li className={styles.task}>
			<div className={styles["task-group"]}>
				<input
					className={styles.checkbox}
					type="checkbox"
					checked={isChecked}
					name={task.name}
					id={task.id}
					onChange={handleCheckboxChange}
				/>
				<label htmlFor={task.id} className={styles.label}>
					{task.name}
					<p className={styles.checkmark}>
						<CheckIcon strokeWidth={2} width={24} height={24} />
					</p>
				</label>
			</div>
			<div className={styles["task-group"]}>
				<button
					className="btn"
					aria-label={`Update ${task.name} Task`}
					onClick={() => enterEditMode(task)}
				>
					<PencilSquareIcon strokeWidth={2} width={24} height={24} />
				</button>

				<button
					className={`btn ${styles.delete}`}
					aria-label={`Delete ${task.name} Task`}
					onClick={() => deleteTask(task.id)}
				>
					<TrashIcon strokeWidth={2} width={24} height={24} />
				</button>
			</div>
		</li>
	);
};
