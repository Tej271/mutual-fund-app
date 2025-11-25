import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "../components/ui/badge";

interface MutualFundItemProps {
  schemeCode: string;
  schemeName: string;
  category?: string;
  fundHouse?: string;
}

export function MutualFundItem({
  schemeCode,
  schemeName,
  category,
  fundHouse,
}: MutualFundItemProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium line-clamp-2">{schemeName}</CardTitle>
          <Badge variant="outline" className="ml-2 whitespace-nowrap">
            {schemeCode}
          </Badge>
        </div>
        {fundHouse && <p className="text-sm text-muted-foreground">{fundHouse}</p>}
      </CardHeader>
      <CardContent>
        {category && (
          <div className="flex gap-2">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
