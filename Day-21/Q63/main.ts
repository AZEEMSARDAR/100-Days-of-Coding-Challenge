// Creating a custom type (type alias) for shapes that could be circles or rectangles\

type shapes = {
    kind: "circle" | "rectangle";
    radius?: number; // Only for circles
    widht?: number; // Only for rectangles
    height?: number; // Only for rectangles
}

let circle: shapes = {
    kind: "circle",
    radius: 5
}

let rectangle: shapes = {
    kind: "rectangle",
    widht: 10,
    height: 20
}

// Showing what we described
console.log(circle);
console.log(rectangle);

