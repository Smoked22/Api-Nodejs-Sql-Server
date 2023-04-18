export const queries = {
    getAllProducts: "SELECT * FROM Products",
    addNewProduct: "INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)",
    getProductById: "SELECT * FROM Products WHERE Id = @id",
    deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id = @Id",
    getTotalProducts: "SELECT COUNT(*) FROM Products",
    updateProductById: "UPDATE Products SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
}