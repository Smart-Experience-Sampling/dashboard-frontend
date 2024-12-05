'use client'

import { getRootLocations } from "@/api/location/getRootLocations";
import FAB from "@/components/FAB";
import { TreeView } from "@/components/TreeView";
import { Location } from "@/types/location";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

export default function LocationsPage() {
    const [locations, setLocations] = useState<Location[]>([])
    useEffect(() => {
        async function getLocations() {
          
          let locations = await getRootLocations()
          setLocations(locations)
          console.log(locations)
        }
    
        getLocations()
    }, [])

    return (
<main className="container mx-auto" style={{padding: '40px'}}>
    <h1 className="text-2xl font-bold mb-4">Location Tree View</h1>
    {locations.length != 0 ? <TreeView locations={locations} /> : <div>No locations found!</div>}
    
    <FAB variant={'default'} size={'icon'} icon={Plus} />
</main>
    )
}