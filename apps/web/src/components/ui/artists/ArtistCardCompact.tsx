import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/base/card";

type Artist = {
  id: string;
  name: string;
  imageUrl: string;
};

interface ArtistCardCompactProps {
  artist: Artist;
}

export const ArtistCardCompact = ({ artist }: ArtistCardCompactProps) => {
  return (
    <Card className="p-4 flex flex-col items-center text-center hover:shadow-md transition-shadow">
      <div className="w-24 h-24 relative rounded-full overflow-hidden border border-gray-300  ">
        <Image
          src={artist.imageUrl}
          alt={artist.name}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-0 mt-3">
        <CardTitle className="text-sm font-medium">{artist.name}</CardTitle>
      </CardContent>
    </Card>
  );
};
