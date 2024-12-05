import FAB from "@/components/FAB";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function ResearchPage() {
    return (
<>
<div style={{
    width: '100%',
    height: '120px',
    boxShadow: 'lightGray 0px 0px 20px 10px inset',
    display: 'flex'
}}>
    <div style={{
        height: '100%',
        width: '5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>+</div>
    <div style={{
        height: '100%',
        width: '10%',
        backgroundColor: '#d4d4d8',
        borderRadius: '10px'
    }}>Research</div>
    <div style={{
        height: '100%',
        width: '5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>+</div>
    <div style={{
        height: '100%',
        width: '10%',
        backgroundColor: 'gray',
        borderRadius: '10px'
    }}>Research</div>
    <div style={{
        height: '100%',
        width: '5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>+</div>
    <div style={{
        height: '100%',
        width: '10%',
        backgroundColor: 'gray',
        borderRadius: '10px'
    }}>Research</div>
</div>
        {/* floating action button: */}
        <FAB variant={'default'} size={'icon'} icon={Plus} />
        </>
    )
}