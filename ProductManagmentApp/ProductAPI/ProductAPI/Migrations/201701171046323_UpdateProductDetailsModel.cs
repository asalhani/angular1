namespace ProductAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateProductDetailsModel : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Products", "ProductName", c => c.String());
            AddColumn("dbo.Products", "ProductDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.Products", "ProductPrice", c => c.Double(nullable: false));
            AddColumn("dbo.Products", "ProductImagaeUrl", c => c.String());
            DropColumn("dbo.Products", "ImagaeUrl");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Products", "ImagaeUrl", c => c.String());
            DropColumn("dbo.Products", "ProductImagaeUrl");
            DropColumn("dbo.Products", "ProductPrice");
            DropColumn("dbo.Products", "ProductDate");
            DropColumn("dbo.Products", "ProductName");
        }
    }
}
