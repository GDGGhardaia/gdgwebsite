export default function Divider() {
  return (
    <div className="w-full py-4">
      <div
        className="h-2 w-full rounded-full"
        style={{
          background: "linear-gradient(90deg, #4285F4 0%, #34A853 25%, #FBBC04 50%, #EA4335 75%, #4285F4 100%)",
        }}
      />
    </div>
  );
}
