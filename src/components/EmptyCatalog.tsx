export default function EmptyCatalog({ message }: { message: string }) {
  return (
    <div className="text-center py-8">
      <p className="text-gray-500">{message}</p>
    </div>
  );
}
