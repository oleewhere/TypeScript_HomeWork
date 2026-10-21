async function foobar<SomeType>(url: string): Promise<SomeType> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json() as SomeType;
}

//Для прикладу витягаю альбом
interface Album {
    userId: number;
    id: number;
    title: string;
}

async function main() {
    const data = await foobar<Album>('https://jsonplaceholder.typicode.com/albums/1');
    console.log(data.userId);
    console.log(data.id);
    console.log(data.title);
}

main().catch(console.error);