// components/MFDetailsCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

interface MFDetailsCardProps {
  schemeName: string;
  fundHouse: string;
  category: string;
  isLoading?: boolean;
}

export function MFDetailsCard({
  schemeName,
  fundHouse,
  category,
  isLoading = false,
}: MFDetailsCardProps) {
  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-1/3" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{schemeName}</CardTitle>
        <p className="text-muted-foreground">{fundHouse}</p>
      </CardHeader>
      <CardContent>
        <Badge variant="secondary" className="text-sm">
          {category}
        </Badge>
      </CardContent>
    </Card>
  );
}
