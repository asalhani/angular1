namespace ProductAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateImageColumn : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Products", "ProductImageName", c => c.String());
            DropColumn("dbo.Products", "ProductImagaeUrl");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Products", "ProductImagaeUrl", c => c.String());
            DropColumn("dbo.Products", "ProductImageName");
        }
    }
}
