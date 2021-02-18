import { useCurrentFrame } from "remotion";

export const MyVideo: React.FC = () => {
	const frame = useCurrentFrame();

  return (
	<div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
		The current frame is {frame}.
	</div>
  );
};
